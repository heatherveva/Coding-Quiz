// Global Variables
const startBtn = document.getElementById("start");
const questionDiv = document.getElementById("question");
const timerElement = document.getElementById("timer");
const answersDiv = document.getElementById("answers");
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
  } else alert("You got the wrong answer.");
}

function endGame() {
  isWin = true;
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
        alert(timerCount);
        clearInterval(timer);
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      //loseGame();
      alert("YOU LOST. ☹️");
    }
  }, 1000);
}

// End quiz
// Save high score
// Initialization- start
startBtn.addEventListener("click", startTimer);
