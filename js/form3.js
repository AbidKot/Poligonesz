function generateForm3Question() {
    const variables = ["x", "y", "z", "w", "k"];
    const var1 = variables[Math.floor(Math.random() * variables.length)];
    const num1 = Math.floor(Math.random() * 5) + 1;
    const num2 = Math.floor(Math.random() * 5) + 1;

    const question = `Factorize: ${num1 * num2}${var1}² + ${num1 * num2 * 2}${var1}`;
    const answer = `${num1 * num2}${var1}(${var1} + 2)`;
    return { question, answer };
}
