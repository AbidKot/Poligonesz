function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateForm1Question() {
    const x1 = getRandomInt(1, 10);
    const x2 = getRandomInt(1, 10);
    const operation = ["+", "-", "*"][getRandomInt(0, 2)];
    let question, answer;

    if (operation === "+") {
        question = `Simplify: ${x1}x + ${x2}x`;
        answer = `${x1 + x2}x`;
    } else if (operation === "-") {
        question = `Simplify: ${x1}x - ${x2}x`;
        answer = `${x1 - x2}x`;
    } else {
        question = `Expand: ${x1}(x + ${x2})`;
        answer = `${x1}x + ${x1 * x2}`;
    }

    return { question, answer };
}

function generateForm2Question() {
    const a = getRandomInt(1, 5);
    const b = getRandomInt(1, 5);
    const c = getRandomInt(1, 5);
    const question = `Expand: (${a}x + ${b})(${c}x - ${b})`;
    const answer = `${a * c}x² ${a * -b + b * c > 0 ? "+" : "-"} ${Math.abs(a * -b + b * c)}x - ${b * b}`;
    return { question, answer };
}

function generateForm3Question() {
    const a = getRandomInt(1, 5);
    const b = getRandomInt(1, 5);
    const c = getRandomInt(1, 5);
    const question = `Solve the inequality: ${a}x - ${b} > ${c}`;
    const answer = `x > ${(c + b) / a}`;
    return { question, answer };
}

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
        const userAnswer = document.getElementById("answer").value;
        feedback.textContent = (userAnswer.trim() === correctAnswer) ? "Correct!" : `Wrong! Correct answer: ${correctAnswer}`;
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
