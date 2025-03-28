function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateForm1Question() {
    const x1 = getRandomInt(1, 10);
    const x2 = getRandomInt(1, 10);
    const operation = ["+", "-", "*"][getRandomInt(0, 2)];
    let question, answer, explanation;

    if (operation === "+") {
        question = `Simplify: ${x1}x + ${x2}x`;
        answer = `${x1 + x2}x`;
        explanation = `Combine like terms: ${x1}x + ${x2}x = (${x1} + ${x2})x = ${answer}`;
    } else if (operation === "-") {
        question = `Simplify: ${x1}x - ${x2}x`;
        answer = `${x1 - x2}x`;
        explanation = `Combine like terms: ${x1}x - ${x2}x = (${x1} - ${x2})x = ${answer}`;
    } else {
        question = `Expand: ${x1}(x + ${x2})`;
        answer = `${x1}x + ${x1 * x2}`;
        explanation = `Distribute the ${x1} to both terms inside the parentheses: ${x1} * x + ${x1} * ${x2} = ${answer}`;
    }

    return { question, answer, explanation };
}

function generateForm2Question() {
    const a = getRandomInt(1, 5);
    const b = getRandomInt(1, 5);
    const c = getRandomInt(1, 5);
    const question = `Expand: (${a}x + ${b})(${c}x - ${b})`;
    const answer = `${a * c}x² ${a * -b + b * c > 0 ? "+" : "-"} ${Math.abs(a * -b + b * c)}x - ${b * b}`;
    const explanation = `
        Use FOIL (First, Outer, Inner, Last) to expand:<br>
        - First: ${a}x * ${c}x = ${a * c}x²<br>
        - Outer: ${a}x * -${b} = -${a * b}x<br>
        - Inner: ${b} * ${c}x = ${b * c}x<br>
        - Last: ${b} * -${b} = -${b * b}<br>
        Combine like terms: ${answer}
    `;
    return { question, answer, explanation };
}

function generateForm3Question() {
    const a = getRandomInt(1, 5);
    const b = getRandomInt(1, 5);
    const c = getRandomInt(1, 5);
    const question = `Solve the inequality: ${a}x - ${b} > ${c}`;
    const answer = `x > ${(c + b) / a}`;
    const explanation = `
        Add ${b} to both sides: ${a}x > ${c + b}<br>
        Divide both sides by ${a}: x > ${(c + b) / a}
    `;
    return { question, answer, explanation };
}

function generateQuestion(form) {
    if (form === "Form 1") return generateForm1Question();
    if (form === "Form 2") return generateForm2Question();
    if (form === "Form 3") return generateForm3Question();
}

let currentQuestion = 0;
let totalQuestions = 5;

function checkAnswer(correctAnswer, explanation) {
    const userAnswer = document.getElementById("answer").value;
    const feedback = document.getElementById("feedback");
    feedback.innerHTML = (userAnswer.trim() === correctAnswer) ?
        `✅ Correct!<br>${explanation}` :
        `❌ Wrong! Correct answer: ${correctAnswer}<br>${explanation}`;
    currentQuestion++;
    setTimeout(() => {
        feedback.innerHTML = "";
        showQuestion();
    }, 3000);
}

function startQuiz(form) {
    const quizContainer = document.getElementById("quiz-container");
    currentQuestion = 0;
    
    function showQuestion() {
        if (currentQuestion < totalQuestions) {
            const { question, answer, explanation } = generateQuestion(form);
            quizContainer.innerHTML = `
                <h2>${form} Algebra Quiz</h2>
                <p>${question}</p>
                <input type="text" id="answer" placeholder="Your answer">
                <button onclick="checkAnswer('${answer}', \`${explanation}\`)">Submit</button>
            `;
        } else {
            showSummary();
        }
    }

    function showSummary() {
        quizContainer.innerHTML = `<h2>Quiz Complete!</h2><p>You answered ${currentQuestion} questions.</p>`;
    }

    showQuestion();
}
