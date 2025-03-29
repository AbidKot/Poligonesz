function checkAnswer() {
    const userAnswer = document.getElementById("answer").value;
    const feedback = document.getElementById("feedback");

    if (!userAnswer) {
        feedback.textContent = "Please enter an answer!";
        feedback.style.color = "red";
        return;
    }

    const correctAnswer = sessionStorage.getItem("correctAnswer");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Incorrect! The correct answer was: ${correctAnswer}`;
        feedback.style.color = "red";
    }

    document.getElementById("answer").value = ""; // Clear the input field
}
