
function generateForm3Question() {
    const num1 = getRandomInt(1, 10);
    const num2 = getRandomInt(1, 5);
    const question = `What is ${num1} × ${num2}?`;
    const answer = num1 * num2;
    return { question, answer };
}

let currentQuestion = generateForm3Question();
document.getElementById("question").textContent = currentQuestion.question;

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const feedback = document.getElementById("feedback");

    if (userAnswer === currentQuestion.answer) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        currentQuestion = generateForm3Question();
        document.getElementById("question").textContent = currentQuestion.question;
        document.getElementById("answer").value = "";
    } else {
        feedback.textContent = "Try again!";
        feedback.style.color = "red";
    }
}
