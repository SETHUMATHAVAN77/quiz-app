// elements
let containerEl = document.getElementById("container");
let questionEl = document.getElementById("question");
let option1El = document.getElementById("option1");
let option2El = document.getElementById("option2");
let option3El = document.getElementById("option3");
let option4El = document.getElementById("option4");
let resultEl = document.getElementById("result");

// data

let questions = [
  {
    question: "The first mechanical computer designed by Charles Babbage?",
    option1: "Abacus",
    option2: "Analytical Engine",
    option3: "Calculator",
    option4: "Processor",
    answer: "2",
  },
  {
    question: "Which of the following is the most powerful type of Computer?",
    option1: "Super-micro",
    option2: "Super Conductor",
    option3: "Super Computer",
    option4: "MegaFrame",
    answer: "3",
  },
  {
    question: "Which is  a single integrated circuit?",
    option1: "Gate",
    option2: "Mother Board",
    option3: "Chip",
    option4: "CPU",
    answer: "1",
  },
  {
    question: "Web pages are written using?",
    option1: "FTP",
    option2: "HTTP",
    option3: "HTML",
    option4: "URL",
    answer: "3",
  },
  {
    question: "Find the odd one out?",
    option1: "ORACLE",
    option2: "SYBASE",
    option3: "C",
    option4: "INFORMIX",
    answer: "3",
  },
];

// /global variables

let currentQuestion = 0;
let score = 0;
let totalQUestions = questions.length;

// function

// pointing elements to data(adding)

function loadQuestion(index) {
  let data = questions[index];
  questionEl.textContent = index + 1 + ". " + data.question;
  option1El.textContent = data.option1;
  option2El.textContent = data.option2;
  option3El.textContent = data.option3;
  option4El.textContent = data.option4;

  let selectedOptionEl = document.querySelector(
    "#container input[type=radio]:checked"
  );
  if (selectedOptionEl) selectedOptionEl.checked = false;
}

loadQuestion(currentQuestion);

// next question btn function

function loadNextQuestion() {
  let selectedOptionEl = document.querySelector(
    "#container input[type=radio]:checked"
  );
  if (!selectedOptionEl) {
    alert("Please Select Some Option !!🤷‍♀️");
    return;
  }
  if (questions[currentQuestion].answer === selectedOptionEl.value) {
    score += 10;
  }
  selectedOptionEl.checked = false;
  currentQuestion++;
  if (currentQuestion === totalQUestions - 1) {
    document.getElementById("nextQuestion").textContent = "Finish";
  }
  if (currentQuestion === totalQUestions) {
    containerEl.style.display = "none";
    resultEl.style.display = "";
    document.getElementById("score").textContent = "Your Score:" + score;
    return;
  }
  loadQuestion(currentQuestion);
}

// restart the quiz

function restartGame() {
  score = 0;
  currentQuestion = 0;
  containerEl.style.display = "";
  resultEl.style.display = "none";
  loadQuestion(currentQuestion);
}
