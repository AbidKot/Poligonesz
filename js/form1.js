function generateForm1Question() {
    const variables = ["a", "b", "c", "d", "m", "n"];
    const var1 = variables[Math.floor(Math.random() * variables.length)];
    const var2 = variables[Math.floor(Math.random() * variables.length)];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const num3 = Math.floor(Math.random() * 5) + 1;

    const question = `Simplify: ${num1}${var1} + ${num2}${var2} - ${num3}${var1}`;
    const answer = `${num1 - num3}${var1} + ${num2}${var2}`;
    return { question, answer };
}
