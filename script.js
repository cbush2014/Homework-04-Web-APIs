var timeEl = document.getElementById("timer");
var secondsLeft = 70;

var qTitle = document.getElementById("Question");
var c1El = document.getElementById("btnA1");
var c2El = document.getElementById("btnA2");
var c3El = document.getElementById("btnA3");
var c4El = document.getElementById("btnA4");
var sTakeQ = document.getElementById("takeQuiz");
var sScore = document.getElementById("finalScore");
var sMain = document.getElementById("startQuiz");
var msgEl = document.getElementById("result");

var numCorrectAnswers = 0;
var numTotalQuestions= 0;
var idxQuestion = 0;  // first question starts at 0
var blnCorrect = false;

sTakeQ.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("button")) {
    //which button did they click
    console.log("button clicked: " + element.id);
    // alert("You clicked the "+element.getAttribute("data-answered")+" answer");

    msgEl.textContent = element.getAttribute("data-answered");
    msgEl.style.color = "red";

    if (element.getAttribute("data-answered") === "Correct") {
      blnCorrect = true;
      msgEl.style.color = "green";
      numCorrectAnswers++;
    } else {
      // incorrect answer, penalize them 15 second
      secondsLeft -= 15;
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
  var timerInterval = setInterval(function () {
    secondsLeft--;

    if (secondsLeft < 0) {
      secondsLeft === 0;
    }
    // timeEl.textContent = "Time: "+ secondsLeft;
    timeEl.textContent = "Time: " + secondsLeft.toString().padStart(2, '0');

    if (secondsLeft === 0) {
      console.log("--- time has run out! --- clear timer")
      clearInterval(timerInterval);
      sTakeQ.classList.add("d-none")
      sMain.classList.add("d-none");  
      showFinalScore();
    }
  }, 1000);
}

function showFinalScore(){
    // hide the main section and the quiz section
    // 
    //store quiz score in local Storage

    sScore.classList.remove("d-none");
}

function takeQuiz() {

  //populate 1st quiz question
  idxQuestion = 0;
  loadQuestion();
  // hide the main section
  sMain.classList.add("d-none");  
  // un-hide the quiz section
  sTakeQ.classList.remove("d-none");
 
  //  start timer 
  setTime();


document.querySelector("#startBtn").onclick = function (event) {

  // user clicks the Start Quiz button
  // hide the startQuiz section and show the takeQuiz section

  console.log('Start button fired');

  if (event === null) {
    return;
  }

  takeQuiz();
}


