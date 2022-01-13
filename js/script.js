// Global Variables
const startBtn = document.getElementById("start");
const questionDiv = document.getElementById("question");
const timerElement = document.getElementById("timer");
const answersDiv = document.getElementById("answers");
const saveButton = "button-addon2";
let scoreDiv = document.getElementById("score");
let initialsDiv = document.getElementById("initials");
const questions = [
  {
    title: "What foundational coding type produces the result true or false?",
    answers: ["String", "Number", "Boolean"],
    correct: "Boolean",
  },
  {
    title: "What data type will always be contained within quotation marks?",
    answers: ["Number", "String", "Boolean"],
    correct: "String",
  },
  {
    title: "What does let introduce in coding?",
    answers: ["Variable", "Function", "Argument"],
    correct: "Variable",
  },
  {
    title: "How do you contain an array?",
    answers: ["Parentheses", "Brackets", "Curly Braces"],
    correct: "Brackets",
  },
  {
    title:
      "What coding language provides the meaning and structure of most web content?",
    answers: ["Javascript", "CSS", "HTML"],
    correct: "HTML",
  },
];

let qIndex = 0;
let timerCount = 30;
isWin = false;
//Clear out previous answer options.

// Functions
function startGame() {
  answersDiv.textContent = "";
  // Show first question with answers
  questionDiv.innerHTML = questions[qIndex].title;
  // Loop through answers
  questions[qIndex].answers.forEach((answer) => {
    // Create element button, add attributes value and text, add click event, and append button to the answers div
    const answerBtn = document.createElement("button");
    answerBtn.textContent = answer;
    answerBtn.setAttribute("value", answer);
    answerBtn.onclick = answerClick;
    answersDiv.appendChild(answerBtn);
  });
}
// Answer click function
function answerClick() {
  // When someone clicks the button, we want the computer to know what button you pushed. Determine the answer the user chose.
  let clickedAnswer = this.value;
  // Verify if the answer is correct.
  if (clickedAnswer === questions[qIndex].correct) {
    // Let them know they got the answer right or wrong.
    // Move to next question or end the game.
    alert("You got the right answer!");

    qIndex++;
    if (questions.length > qIndex) {
      startGame();
    } else {
      endGame();
    }
  } else {
    timerCount = timerCount - 5;
  }
}
function endGame() {
  isWin = true;
  localStorage.setItem("score", timerCount);
  saveScore();
}

function startTimer() {
  startGame();

  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        alert(timerCount);
        saveScore();
      }
    }
    // Tests if time has run out
    if (timerCount < 0) {
      // Clears interval
      clearInterval(timer);
      //loseGame();
      alert("YOU LOST. ☹️");
      saveScore();
    }
  }, 1000);
}

function saveScore() {
  scoreDiv.textContent = "Your Score:" + " " + timerCount;
}

let initials = localStorage.setItem("initials", initialsDiv);
let score = localStorage.setItem("score", timerCount);

initials = document.querySelector("#initials").value;
score = document.querySelector("#score").value;

function displayScore() {
  initialsDiv.textContent = "initials";
  scoreDiv.textContent = "score";

  saveButton.addEventListener("click", displayScore);

  localStorage.getItem("initials");
  localStorage.getItem("score");
  saveScore();
}

//Upon clicking the save button on the initials, initials and score should populate to the corresponding boxes.

// End quiz
// Save high score
// Initialization- start
startBtn.addEventListener("click", startTimer);
