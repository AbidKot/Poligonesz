function generateForm2Question() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5) + 1;
    const c = Math.floor(Math.random() * 5) + 1;
    const question = `Solve for y: ${a}y + ${b} = ${c}`;
    const answer = ((c - b) / a).toString();

    document.getElementById("question").textContent = question;
    sessionStorage.setItem("correctAnswer", answer);
}
