function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateForm1Question() {
    const x1 = getRandomInt(1, 10);
    const x2 = getRandomInt(1, 10);
    const num1 = getRandomInt(1, 5);
    const num2 = getRandomInt(1, 5);
    const value = getRandomInt(1, 10);
    const operation = getRandomInt(1, 4);
    let question, answer;

    switch (operation) {
        case 1:
            question = `Simplify: ${x1}x + ${x2}x - ${num1}x`;
            answer = `${x1 + x2 - num1}x`;
            break;
        case 2:
            question = `Expand: ${x1}(x + ${x2})`;
            answer = `${x1}x + ${x1 * x2}`;
            break;
        case 3:
            question = `Factorize: ${num1 * num2}x + ${num1 * 3}`;
            answer = `${num1}(${num2}x + 3)`;
            break;
        case 4:
            question = `Find the value of ${num1}x + ${num2} when x = ${value}`;
            answer = `${num1 * value + num2}`;
            break;
    }

    return { question, answer };
}
