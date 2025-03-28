// Start the quiz with the chosen form level
function startQuiz(form) {
    const quizContainer = document.getElementById("quiz-container");
    const feedback = document.getElementById("feedback");
    let score = 0;
    let currentQuestion = 0;
    const totalQuestions = 5;

    function showQuestion() {
        if (currentQuestion < totalQuestions) {
            const { question, answer, explanation } = generateQuestion(form);
            quizContainer.innerHTML = `
                <h2>${form} Algebra Quiz</h2>
                <p>${question}</p>
                <input type="text" id="answer" placeholder="Your answer">
                <button onclick="checkAnswer('${answer}', '${explanation}')">Submit</button>
                <p id="feedback"></p>
            `;
        } else {
            showSummary();
        }
    }

    function checkAnswer(correctAnswer, explanation) {
        const userAnswer = document.getElementById("answer").value;
        const isCorrect = userAnswer.trim() === correctAnswer;

        feedback.textContent = isCorrect ? "Correct!" : `Wrong! Correct answer: ${correctAnswer}. Explanation: ${explanation}`;
        if (isCorrect) score++;
        currentQuestion++;
        setTimeout(() => {
            feedback.textContent = "";
            showQuestion();
        }, 2000);
    }

    function showSummary() {
        quizContainer.innerHTML = `
            <h2>Quiz Complete!</h2>
            <p>Your score: ${score} / ${totalQuestions}</p>
        `;
    }

    showQuestion();
}
