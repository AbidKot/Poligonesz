function generateForm3Question() {
    const p = Math.floor(Math.random() * 5) + 1;
    const q = Math.floor(Math.random() * 5) + 1;
    const r = Math.floor(Math.random() * 5) + 1;
    const question = `Factorize: ${p * q}x² + ${r * q}x`;
    const answer = `${q}(x² + ${r}x)`;

    document.getElementById("question").textContent = question;
    sessionStorage.setItem("correctAnswer", answer);
}
