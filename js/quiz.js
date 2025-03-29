document.getElementById("form1").addEventListener("click", () => loadQuestion(1));
document.getElementById("form2").addEventListener("click", () => loadQuestion(2));
document.getElementById("form3").addEventListener("click", () => loadQuestion(3));
document.getElementById("submit").addEventListener("click", checkAnswer);

let currentQuestion = "";
let correctAnswer = "";
let score = 0;

function updateScore(isCorrect) {
    if (isCorrect) {
        score++;
        alert("Correct!");
    } else {
        alert(`Wrong! The correct answer was: ${correctAnswer}`);
    }
    document.getElementById("score").innerHTML = `Score: ${score}`;
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    updateScore(userAnswer === correctAnswer);
}

function loadQuestion(form) {
    switch (form) {
        case 1:
            ({ question: currentQuestion, answer: correctAnswer } = generateForm1Question());
            break;
        case 2:
            ({ question: currentQuestion, answer: correctAnswer } = generateForm2Question());
            break;
        case 3:
            ({ question: currentQuestion, answer: correctAnswer } = generateForm3Question());
            break;
    }
    document.getElementById("question").innerHTML = currentQuestion;
}
