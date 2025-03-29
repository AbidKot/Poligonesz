// Dynamic Algebra Quiz Script

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomVariable() {
    const variables = ['x', 'y', 'a', 'b', 'm', 'n'];
    return variables[getRandomInt(0, variables.length - 1)];
}

function generateQuestion(form) {
    const operation = ['simplify', 'extract', 'expand', 'factorize', 'evaluate', 'solve', 'rearrange'];
    const action = operation[getRandomInt(0, operation.length - 1)];
    const var1 = getRandomVariable();
    const var2 = getRandomVariable();
    const num1 = getRandomInt(1, 10);
    const num2 = getRandomInt(1, 10);
    const num3 = getRandomInt(1, 10);

    let question = '';
    let answer = 0;

    switch(form) {
        case 1:
            question = `${action} the expression: ${num1}${var1} + ${num2}${var2}`;
            answer = num1 + num2;
            break;
        case 2:
            question = `${action} the equation: ${num1}${var1} - ${num2} = ${num3}`;
            answer = (num3 + num2) / num1;
            break;
        case 3:
            question = `${action} the quadratic: ${num1}${var1}² + ${num2}${var1} + ${num3}`;
            answer = -num2 / (2 * num1);
            break;
    }

    return { question, answer };
}

function showQuestion(form) {
    const quizContainer = document.getElementById('quiz');
    const { question, answer } = generateQuestion(form);
    const userAnswer = prompt(question);

    if (userAnswer == answer) {
        alert('Correct!');
    } else {
        alert(`Wrong! The correct answer is ${answer}.`);
    }

    quizContainer.innerHTML = `<p>${question}</p>`;
}

function startQuiz(form) {
    showQuestion(form);
}
