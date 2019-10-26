var timeEl = document.getElementById("timer");
var secondsLeft = 70;
var timerInterval;

var qTitle = document.getElementById("Question");
var c1El = document.getElementById("btnA1");
var c2El = document.getElementById("btnA2");
var c3El = document.getElementById("btnA3");
var c4El = document.getElementById("btnA4");
var sTakeQ = document.getElementById("takeQuiz");
var sScore = document.getElementById("finalScore");
var sMain = document.getElementById("startQuiz");
var msgEl = document.getElementById("result");
var HighScoreEl = document.getElementById("idHighscore");
var msgDone = document.getElementById("msgQuizDone");
var msgScoreEl = document.getElementById("msgScore");

var numCorrectAnswers = 0;
var numTotalQuestions= 0;
var idxQuestion = 0;  // first question starts at 0
var blnCorrect = false;
var numCorrectAnswers = 0;
var numTotalQuestions = 0;

sTakeQ.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("button")) {
    //which button did they click
    console.log("button clicked: " + element.id);
    // alert("You clicked the "+element.getAttribute("data-answered")+" answer");

    msgEl.textContent = element.getAttribute("data-answered");
    msgEl.style.color = "red";
    console.log(msgEl);
    if (element.getAttribute("data-answered") === "Correct") {
      blnCorrect = true;
      msgEl.style.color = "green";
      numCorrectAnswers++;
    } else {
      // incorrect answer, penalize them 15 second
      secondsLeft -= 15;
      checkTimeRemaining();

    }
    // alert("loading next question idxQuestion is"+idxQuestion);
    // load the next question
    idxQuestion++;
    loadQuestion();
  }

});

function loadQuestion() {
  var idxCorrect = -99;
  if (questions[idxQuestion] === undefined) {
    return;
  }
  var correctAnswer = questions[idxQuestion].answer;
  numTotalQuestions++;

  //we have a global questions array already in memory, and the current index
  qTitle.textContent = questions[idxQuestion].title;

  // find out which choice is the correct one
  for (i = 0; i < questions[idxQuestion].choices.length; i++) {
    if (questions[idxQuestion].choices[i] === correctAnswer) {
      idxCorrect = i;
    }
  }
  numTotalQuestions++;

  c1El.textContent = questions[idxQuestion].choices[0];
  c2El.textContent = questions[idxQuestion].choices[1];
  c3El.textContent = questions[idxQuestion].choices[2];
  c4El.textContent = questions[idxQuestion].choices[3];

  c1El.setAttribute("data-answered", "Incorrect");
  c2El.setAttribute("data-answered", "Incorrect");
  c3El.setAttribute("data-answered", "Incorrect");
  c4El.setAttribute("data-answered", "Incorrect");

  switch (idxCorrect) {
    case 0:
      c1El.setAttribute("data-answered", "Correct");
      break;
    case 1:
      c2El.setAttribute("data-answered", "Correct");
      break;
    case 2:
      c3El.setAttribute("data-answered", "Correct");
      break;
    case 3:
      c4El.setAttribute("data-answered", "Correct");
      break;

  }

}


function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;

    if (!secondsLeft > 0) {
      secondsLeft = 0;
    }
    // timeEl.textContent = "Time: "+ secondsLeft;
    timeEl.textContent = "Time: " + secondsLeft.toString().padStart(2, '0');
    checkTimeRemaining();

  }, 1000);
}

function checkTimeRemaining() {

  if (secondsLeft <= 0) {
    // console.log("--- time has run out! --- clear timer")
    setTimeout(function () {
      document.getElementById("msgQuizDone").textContent = "Your Time is Up!";
      document.getElementById("msgQuizDone").style.color = "red";
    }, 1000);

    clearInterval(timerInterval);
    showFinalScore();
  }
}

function showFinalScore() {
  // hide the main section and the quiz section
  sTakeQ.classList.add("d-none")
  // sMain.classList.add("d-none");
  sScore.classList.remove("d-none");
  document.getElementById("msgQuizDone").textContent = "All done!";
  if (!secondsLeft > 0) {
    secondsLeft = 0;
  }
  alert(secondsLeft);
  if (numCorrectAnswers > 0) {
    document.getElementById("msgScore").textContent = "Your final score is " + (numCorrectAnswers / numTotalQuestions) + (0.2 * secondsLeft);
  } else {
    document.getElementById("msgScore").textContent = "Your final score is 0";
  }

  // document.getElementById("msgScore").textContent = "Your final score is "+ (idxCorrect/numTotalQuestions)+(0.2*secondsLeft);
  // completely bogus waste of hours, the 2 lines above this work, and the 2 commented lines below do Not work
  // msgDone.getElementById("msgQuizDone").textContent = "All done!";
  // msgScoreEl.getElementById("msgScore").textContent = "Your final score is "+ (idxCorrect/numTotalQuestions)+(0.2*secondsLeft);

}

function takeQuiz() {

  //populate 1st quiz question
  idxQuestion = 0;
  loadQuestion();
  // hide the main section
  sMain.classList.add("d-none");
  sTakeQ.classList.remove("d-none");

  //  start timer 
  setTime();

}


document.querySelector("#startBtn").onclick = function (event) {

  // user clicks the Start Quiz button
  // hide the startQuiz section and show the takeQuiz section

  console.log('Start button fired');

  if (event === null) {
    return;
  }

  takeQuiz();
}

