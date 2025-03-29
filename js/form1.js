function generateForm1Question() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const question = `Simplify: ${num1}x + ${num2}x`;
    const answer = ((num1 + num2) + "x").toString();

    document.getElementById("question").textContent = question;
    sessionStorage.setItem("correctAnswer", answer);
}
