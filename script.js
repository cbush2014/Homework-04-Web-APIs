var timeEl = document.getElementById("timer");
var secondsLeft = 75;

var qTitle = document.getElementById("qTitle");
var c1El = document.getElementById("btnA1");
var c2El = document.getElementById("btnA2");
var c3El = document.getElementById("btnA3");
var c4El = document.getElementById("btnA4");
var ansEl = document.getElementById("qAnswer");

function loadQuestion(idx) {

  var title = questions[idx].title;
  var choice1 = questions[idx].choices[0];
  var choice2 = questions[idx].choices[1];
  var choice3 = questions[idx].choices[2];
  var choice4 = questions[idx].choices[3];
  var answer = questions[idx].answer;

  qTitle.textContent = title;
  c1El.textContent = choice1;
  c2El.textContent = choice2;
  c3El.textContent = choice3;
  c4El.textContent = choice4;
  qAnswer.textContent = answer;

}


function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    // timeEl.textContent = "Time: "+ secondsLeft;
    timeEl.textContent = "Time: " + secondsLeft.toString().padStart(2, '0');

    if (secondsLeft === 0) {
      console.log("--- time has run out! --- clear timer")
      clearInterval(timerInterval);
      toggleSection();
    }

    // This section of code is for taking the quiz



  }, 1000);
}


function takeQuiz() {

  //populate 1st quiz question
  loadQuestion(0);
  toggleSection();

  //  start timer 
  setTime();

}

function toggleSection() {

  var startEl = document.getElementById("startQuiz");
  var takeEl = document.getElementById("takeQuiz");

  console.log(startEl);
  if (startEl.style.display === "none") {
    startEl.style.display = "block";
    takeEl.style.display = "none";
  } else {
    startEl.style.display = "none";
    takeEl.style.display = "block";
  }
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


