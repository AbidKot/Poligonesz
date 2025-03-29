function generateForm2Question() {
    const questions = [
        () => {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            return {
                question: `Solve: ${a}x + ${b} = ${a + b}`,
                answer: 1
            };
        },
        () => {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            const c = Math.floor(Math.random() * 10) + 1;
            return {
                question: `Solve: ${a}x - ${b} = ${c}`,
                answer: ((c + b) / a).toFixed(2)
            };
        },
        () => {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            const c = Math.floor(Math.random() * 10) + 1;
            return {
                question: `Find the value of x: ${a}x + ${b} = ${c}x - ${b}`,
                answer: ((-2 * b) / (c - a)).toFixed(2)
            };
        },
        () => {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            const c = Math.floor(Math.random() * 10) + 1;
            return {
                question: `Expand and simplify: ${a}(x + ${b}) - ${c}x`,
                answer: `${a - c}x + ${a * b}`
            };
        },
        () => {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            const c = Math.floor(Math.random() * 10) + 1;
            return {
                question: `Solve the inequality: ${a}x - ${b} > ${c}`,
                answer: `x > ${(c + b) / a}`
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
