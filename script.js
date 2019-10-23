var timeEl = document.getElementById("timer");
var secondsLeft = 4;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: "+ secondsLeft;

    if(secondsLeft === 0) {
      console.log("--- time has run out! --- clear timer")
      clearInterval(timerInterval);
    }

  }, 1000);
}

function takeQuiz() {
//   timeEl.textContent = "Time: 0"+ ;

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

  console.log('Start butto fired');

  if(event === null){
    return;
  }
    console.log( "invoke takeQuiz function");

    toggleSection();

    takeQuiz();
}


