function generateForm3Question() {
    const questions = [
        () => {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            return {
                question: `Factorize: ${a * b}x² + ${a * b}x`,
                answer: `${a * b}x(x + 1)`
            };
        },
        () => {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            return {
                question: `Solve: x² - ${a * 2}x + ${b * 2} = 0`,
                answer: `${a}, ${b}`
            };
        },
        () => {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            return {
                question: `Simplify: (${a}x + ${b})²`,
                answer: `${a * a}x² + ${2 * a * b}x + ${b * b}`
            };
        },
        () => {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            const c = Math.floor(Math.random() * 10) + 1;
            return {
                question: `Expand: (${a}x + ${b})(${c}x - ${b})`,
                answer: `${a * c}x² + ${(a * -b) + (b * c)}x - ${b * b}`
            };
        }
    ];

    const { question, answer } = questions[Math.floor(Math.random() * questions.length)]();
    document.getElementById("question").textContent = question;
    document.getElementById("feedback").textContent = "";
    document.getElementById("answer").value = "";
    window.correctAnswer = answer;
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value;
    const feedback = document.getElementById("feedback");
    if (userAnswer === window.correctAnswer) {
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = `Incorrect. The correct answer is ${window.correctAnswer}.`;
    }
}
