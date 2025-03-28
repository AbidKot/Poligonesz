// js/questions.js
import { getRandomInt } from './utils.js';

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
        explanation = `Distribute the ${x1} to both terms: ${x1} * x + ${x1} * ${x2} = ${answer}`;
    }

    return { question, answer, explanation };
}

function generateForm2Question() {
    const a = getRandomInt(1, 5);
    const b = getRandomInt(1, 5);
    const c = getRandomInt(1, 5);
    const question = `Expand: (${a}x + ${b})(${c}x - ${b})`;
    const answer = `${a * c}x² ${a * -b + b * c > 0 ? "+" : "-"} ${Math.abs(a * -b + b * c)}x - ${b * b}`;
    const explanation = `Use FOIL method and combine like terms: ${answer}`;
    return { question, answer, explanation };
}

function generateForm3Question() {
    const a = getRandomInt(1, 5);
    const b = getRandomInt(1, 5);
    const c = getRandomInt(1, 5);
    const question = `Solve the inequality: ${a}x - ${b} > ${c}`;
    const answer = `x > ${(c + b) / a}`;
    const explanation = `Add ${b} and divide by ${a} to isolate x.`;
    return { question, answer, explanation };
}

export { generateForm1Question, generateForm2Question, generateForm3Question };
