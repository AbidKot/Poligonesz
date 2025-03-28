function startQuiz(form) {
    const quizContainer = document.getElementById("quiz-container");
    const feedback = document.getElementById("feedback");
    let score = 0;
    let currentQuestion = 0;
    const totalQuestions = 10;

    function showQuestion() {
        if (currentQuestion < totalQuestions) {
            const { question, answer } = generateQuestion(form);
            quizContainer.innerHTML = `
                <h2>${form} Algebra Quiz</h2>
                <p>${question}</p>
                <input type="text" id="answer" placeholder="Your answer">
                <button id="submitBtn">Submit</button>
            `;
            
            // Add event listener after the button is rendered
            const submitBtn = document.getElementById("submitBtn");
            submitBtn.addEventListener("click", function() {
                checkAnswer(answer);
            });
        } else {
            showSummary();
        }
    }

    function checkAnswer(correctAnswer) {
        const userAnswer = document.getElementById("answer").value.trim();
        if (userAnswer === correctAnswer) {
            feedback.textContent = "✅ Correct!";
            score++;
        } else {
            feedback.textContent = `❌ Wrong! Correct answer: ${correctAnswer}`;
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
