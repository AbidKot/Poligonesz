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
                <button onclick="checkAnswer('${answer}')">Submit</button>
            `;
        } else {
            showSummary();
        }
    }

    function checkAnswer(correctAnswer) {
        const userAnswer = document.getElementById("answer").value.trim();
        feedback.textContent = (userAnswer === correctAnswer) ? "Correct!" : `Wrong! Correct answer: ${correctAnswer}`;
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
