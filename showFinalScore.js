function showFinalScore() {
  // hide the main section and the quiz section
  sTakeQ.classList.add("d-none");
  // sMain.classList.add("d-none");
  sScore.classList.remove("d-none");
  document.getElementById("msgQuizDone").textContent = "All done!";
  if (secondsLeft <= 0) {
    secondsleft = 0;
  }
  if (numCorrectAnswers > 0) {
    document.getElementById("msgScore").textContent = "Your final score is " + (numCorrectAnswers / numTotalQuestions) + (0.2 * secondsLeft);
  }
  else {
    document.getElementById("msgScore").textContent = "Your final score is 0";
  }
  // document.getElementById("msgScore").textContent = "Your final score is "+ (idxCorrect/numTotalQuestions)+(0.2*secondsLeft);
  // completely bogus waste of hours, the 2 lines above this work, and the 2 commented lines below do Not work
  // msgDone.getElementById("msgQuizDone").textContent = "All done!";
  // msgScoreEl.getElementById("msgScore").textContent = "Your final score is "+ (idxCorrect/numTotalQuestions)+(0.2*secondsLeft);
}
