var timeEl = document.getElementById("timer");
var secondsLeft = 4;

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

alert("scooby do something here");

}

setTime();


document.querySelector("#startBtn").onclick = function (event) {
    if (event !== null) {
        alert('Start Your Quiz NOW');
    }
}
