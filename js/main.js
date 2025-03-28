function generateQuestion(form) {
    if (form === "Form 1") return generateForm1Question();
    if (form === "Form 2") return generateForm2Question();
    if (form === "Form 3") return generateForm3Question();
}

function startQuiz(form) {
    const quizContainer = document.getElementById("quiz-container");
    const feedback = document.getElementById("feedback");
    let score = 0;
    let currentQuestion = 0;
    const totalQuestions = 5;

    function showQuestion() {
        if (currentQuestion < totalQuestions) {
            const { question, answer } = generateQuestion(form);
            quizContainer.innerHTML = `
                <h2>${form} Algebra Quiz</h2>
                <p>${question}</p>
                <input type="text" id="answer" placeholder="Your answer">
                <button id="submit-btn">Submit</button>
            `;
            const submitBtn = document.getElementById("submit-btn");
            submitBtn.addEventListener("click", () => checkAnswer(answer));
        } else {
            showSummary();
        }
    }

    function checkAnswer(correctAnswer) {
        const userAnswer = document.getElementById("answer").value.trim();
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct!";
            score++;
        } else {
            feedback.textContent = `Wrong! Correct answer: ${correctAnswer}`;
        }
        currentQuestion++;
        setTimeout(() => {
            feedback.textContent = "";
            showQuestion();
        }, 1000);
    }

    function showSummary() {
        quizContainer.innerHTML = `<h2>Quiz Complete!</h2><p>Your score: ${score} / ${totalQuestions}</p>`;
    }

    showQuestion();
}
document.addEventListener("DOMContentLoaded", () => {
    console.log("JS Loaded!");
    const testButton = document.createElement("button");
    testButton.textContent = "Test Click";
    testButton.addEventListener("click", () => alert("Button clicked!"));
    document.body.appendChild(testButton);
});
