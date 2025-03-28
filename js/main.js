function startQuiz(form) {
    const quizContainer = document.getElementById("quiz-container");
    const feedback = document.getElementById("feedback");
    let score = 0;
    let currentQuestion = 0;
    const totalQuestions = 10; // Adjusted to 10 questions

    function showQuestion() {
        if (currentQuestion < totalQuestions) {
            const { question, answer, explanation } = generateQuestion(form);
            quizContainer.innerHTML = `
                <h2>${form} Algebra Quiz</h2>
                <p>${question}</p>
                <input type="text" id="answer" placeholder="Your answer">
                <button onclick="checkAnswer('${answer}', '${explanation}')">Submit</button>
            `;
        } else {
            showSummary();
        }
    }

    function checkAnswer(correctAnswer, explanation) {
        const userAnswer = document.getElementById("answer").value.trim();
        if (userAnswer === correctAnswer) {
            feedback.textContent = "✅ Correct!";
            score++;
        } else {
            feedback.textContent = `❌ Wrong! Correct answer: ${correctAnswer}. Explanation: ${explanation}`;
        }
        currentQuestion++;
        setTimeout(() => {
            feedback.textContent = "";
            showQuestion();
        }, 1500);
    }

    function showSummary() {
        quizContainer.innerHTML = `
            <h2>Quiz Complete!</h2>
            <p>Your score: ${score} / ${totalQuestions}</p>
        `;
    }

    showQuestion();
}
