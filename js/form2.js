function generateForm2Question() {
    const variables = ["p", "q", "r", "s", "t"];
    const var1 = variables[Math.floor(Math.random() * variables.length)];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    const question = `Expand: ${num1}(${var1} + ${num2})`;
    const answer = `${num1}${var1} + ${num1 * num2}`;
    return { question, answer };
}
