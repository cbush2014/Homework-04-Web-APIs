var timeEl = document.getElementById("timer");
var secondsLeft = 224;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: "+ secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      takeQuiz();
    }

  }, 1000);
}

function takeQuiz() {
//   timeEl.textContent = "Time: 0"+ ;

  console.log( "invoke takeQuiz function");
  //  start timer 
  setTime();

}


document.querySelector("#startBtn").onclick = function () {

  // user clicks the Start Quiz button
  // hide the startQuiz section and show the takeQuiz section


  if (event !== null) {
        console.log('Start butto fired');
    }

    var startEl= document.getElementById("startQuiz");
    console.log(startEl);
    startEl.style.display = "none";

    var takeEl = document.getElementById("takeQuiz");
    takeEl.style.display= "block"

    takeQuiz();




}
