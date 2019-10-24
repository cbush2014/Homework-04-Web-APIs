var timeEl = document.getElementById("timer");
var secondsLeft = 13;

var qTitle = document.getElementById("qTitle");
var c1El = document.getElementById("btnA1");
var c2El = document.getElementById("btnA2");
var c3El = document.getElementById("btnA3");
var c4El = document.getElementById("btnA4");
var ansEl = document.getElementById("qAnswer");

function loadQuestion(){

  var title = questions[0].title;
  var choice1 = questions[0].choices[0];
  var choice2 = questions[0].choices[1];
  var choice3 = questions[0].choices[2];
  var choice4 = questions[0].choices[3];
  var answer =  questions[0].answer;
  alert("|"+title+ " / "+answer+"|");
  // console.log(questions[0].title);
  // console.log(questions[0].choices[0]);
  // console.log(questions[0].choices[1]);
  // console.log(questions[0].choices[2]);
  // console.log(questions[0].choices[3]);
  // console.log(questions[0].answer);
  //  qTitle.textContent = questions[0].title;
  // c1El.textContent = questions[0].choices[0];
  // c2El.textContent = questions[0].choices[1];
  // c3El.textContent = questions[0].choices[2];
  // c4El.textContent = questions[0].choices[3];
  qTitle.textContent = title;
  c1El.textContent = choice1;
  c2El.textContent = choice2;
  c3El.textContent = choice3;
  c4El.textContent = choice4;
  qAnswer.textContent= answer;
console.log(questions);
}



function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    // timeEl.textContent = "Time: "+ secondsLeft;
    timeEl.textContent = "Time: "+ secondsLeft.toString().padStart(2, '0');

    if(secondsLeft === 0) {
      console.log("--- time has run out! --- clear timer")
      clearInterval(timerInterval);

      toggleSection();
    }

  }, 1000);
}


function takeQuiz() {

    //populate 1st quiz
    loadQuestion();

    //  start timer 
  setTime();

}
 
function toggleSection(){

  var startEl= document.getElementById("startQuiz");
  var takeEl = document.getElementById("takeQuiz");

  console.log(startEl);
  if ( startEl.style.display === "none") {
        startEl.style.display = "block";
        takeEl.style.display= "none";
  } else {
        startEl.style.display = "none";
        takeEl.style.display= "block";
  }
}


document.querySelector("#startBtn").onclick = function (event) {

  // user clicks the Start Quiz button
  // hide the startQuiz section and show the takeQuiz section

  console.log('Start button fired');

  if(event === null){
    return;
  }
    console.log( "invoke takeQuiz function");

    toggleSection();

    takeQuiz();
}


