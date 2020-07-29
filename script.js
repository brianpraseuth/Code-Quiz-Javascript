// Create variables for everything needed to make quiz function correctly.
var quizContainer = document.getElementById("quizArea");
var resultsContainer = document.getElementById("answerResults");
var startBtn = document.getElementById("startButton");
var timerDiv = document.getElementById("timeLeft");
var correctIncorrect = document.getElementById("feedback");
var questionOptions = document.getElementById("question");
var answerOptions = document.getElementById("answers");
var startPage = document.getElementById("startingPage");
var quizOver = document.getElementById("endGame");

// Timer of 90 seconds that starts when "Start Quiz" button is clicked.
var secondsLeft = 90;

function startTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerDiv.textContent = "Time Remaining: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }

  }, 1000);
}

quizOver.classList.add("hide");

// Array containing questions and answers for the quiz.
var quizQuestions = [
    {
      question: "Commonly used data types DO NOT include:",
      answers: ["strings", "booleans", "alerts", "numbers"],
      correctAnswer: "alerts"
    },

    {
      question: "The condition in an if / else statement is enclosed within ______.",
      answers: ["quotes", "curly brackets", "parantheses", "square brackets"],
      correctAnswer: "parantheses"
    },

    {
      question: "Arrays in JavaScript can be used to store ______.",
      answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      correctAnswer: "all of the above"
    },

    {
      question: "String values must be enclosed within ______ when being assigned to variables.",
      answers: ["commas", "curly brackets", "quotes", "parentheses"],
      correctAnswer: "quotes"
    },

    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      answers: ["javascript", "terminal/bash", "for loops", "console.log"],
      correctAnswer: "console.log"
    },
  ];

  var currentIndex = 0;

  function startQuiz() {
    var currentQuestion = quizQuestions[currentIndex];
    questionOptions.textContent = currentQuestion.question;
    console.log(currentQuestion.answers);
    answerOptions.textContent = "";
    for (var i = 0; i < currentQuestion.answers.length; i++) {
      var item = document.createElement("li");
      var answer = document.createElement("button");
      answer.setAttribute("value", currentQuestion.answers[i]);
      answer.setAttribute("class", "btn btn-dark");
      item.setAttribute("class", "listItem");
      answer.onclick = checkAnswer;
      answer.textContent = currentQuestion.answers[i];
      item.append(answer);
      answerOptions.append(item);
      console.log(currentQuestion.answers[i]);
    }
  }

  function setScreen() {
    startPage.classList.add("hide");
    quizContainer.classList.remove("hide");
    startQuiz();
    startTime();
  }

  function checkAnswer() {
    if (this.value === quizQuestions[currentIndex].correctAnswer) {
      currentIndex++;
      startQuiz();
      var correct = document.createElement("p");
      resultsContainer.textContent = "Correct!";

    } else {
      currentIndex++;
      secondsLeft -= 10;
      timerDiv.textContent = "Time Remaining: " + secondsLeft;
      startQuiz();
      var correct = document.createElement("p");
      resultsContainer.textContent = "Incorrect!";
    }

  }

  function endQuiz(){
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      startPage.classList.add("hide");
      quizContainer.classList.add("hide");
      quizOver.classList.remove("hide");
    }
  }
startBtn.addEventListener("click", function() {
  setScreen();
});
