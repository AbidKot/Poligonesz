function generateForm1Question() {
    const questions = [
        () => {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            return {
                question: `Simplify: ${a}x + ${b}x`,
                answer: (a + b) + 'x'
            };
        },
        () => {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            return {
                question: `Expand: ${a}(x + ${b})`,
                answer: `${a}x + ${a * b}`
            };
        },
        () => {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            const c = Math.floor(Math.random() * 10) + 1;
            return {
                question: `Factorize: ${a * c}x + ${b * c}`,
                answer: `${c}(${a}x + ${b})`
            };
        },
        () => {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            return {
                question: `Solve: ${a}x = ${b}`,
                answer: (b / a).toFixed(2)
            };
        },
        () => {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            const c = Math.floor(Math.random() * 10) + 1;
            return {
                question: `Evaluate: ${a}x + ${b} = ${c}`,
                answer: ((c - b) / a).toFixed(2)
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
