function generateForm2Question() {
    const a = getRandomInt(1, 5);
    const b = getRandomInt(1, 5);
    const c = getRandomInt(1, 5);
    const d = getRandomInt(1, 5);
    const operation = getRandomInt(1, 4);
    let question, answer;

    switch (operation) {
        case 1:
            question = `Expand: (${a}x + ${b})(${c}x - ${d})`;
            answer = `${a * c}x² ${a * -d + b * c >= 0 ? "+" : "-"} ${Math.abs(a * -d + b * c)}x - ${b * d}`;
            break;
        case 2:
            question = `Factorize: ${a * c}x² + ${a * d + b * c}x + ${b * d}`;
            answer = `(${a}x + ${b})(${c}x + ${d})`;
            break;
        case 3:
            question = `Solve: ${a}x + ${b} = ${c * a + b}`;
            answer = `x = ${c}`;
            break;
        case 4:
            question = `Simplify: (${a}x/${b}) + (${c}x/${b})`;
            answer = `${(a + c)}x/${b}`;
            break;
    }

    return { question, answer };
}
