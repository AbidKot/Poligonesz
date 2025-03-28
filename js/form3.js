function generateForm3Question() {
    const a = getRandomInt(1, 5);
    const b = getRandomInt(1, 5);
    const c = getRandomInt(1, 5);
    const d = getRandomInt(1, 5);
    const operation = getRandomInt(1, 4);
    let question, answer;

    switch (operation) {
        case 1:
            question = `Solve the inequality: ${a}x - ${b} > ${c}`;
            answer = `x > ${(c + b) / a}`;
            break;
        case 2:
            question = `Solve the system of equations: x + y = ${a + b}, ${a}x - y = ${a * b}`;
            answer = `x = ${b}, y = ${a}`;
            break;
        case 3:
            question = `Expand: (${a}x - ${b})(${c}x + ${d})`;
            answer = `${a * c}x² ${a * d - b * c >= 0 ? "+" : "-"} ${Math.abs(a * d - b * c)}x - ${b * d}`;
            break;
        case 4:
            question = `Simplify: (${a * c}x²/${a}x) - (${b * d}x/${b})`;
            answer = `${c}x - ${d}`;
            break;
    }

    return { question, answer };
}
