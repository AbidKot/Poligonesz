// Function to load and display the question
function startQuiz(form) {
    let questionObj;

    // Check which form was selected and generate the question
    switch (form) {
        case "Form 1":
            questionObj = generateForm1Question();
            break;
        case "Form 2":
            questionObj = generateForm2Question();
            break;
        case "Form 3":
            questionObj = generateForm3Question();
            break;
        default:
            console.error("Invalid form selected");
            return;
    }

    // Display the question and clear the answer field
    if (questionObj) {
        console.log("Generated Question:", questionObj.question);
        console.log("Answer:", questionObj.answer);
        document.getElementById("question").innerText = questionObj.question;
        document.getElementById("answer").value = ""; // Clear previous answer
    }
}

// Function to check the user's answer
function checkAnswer(form) {
    let userAnswer = document.getElementById("answer").value;

    // Get the correct answer based on the form
    let correctAnswer;
    switch (form) {
        case "Form 1":
            correctAnswer = generateForm1Question().answer;
            break;
        case "Form 2":
            correctAnswer = generateForm2Question().answer;
            break;
        case "Form 3":
            correctAnswer = generateForm3Question().answer;
            break;
        default:
            console.error("Invalid form selected");
            return;
    }

    // Compare and display result
    if (userAnswer === correctAnswer) {
        alert("Correct!");
    } else {
        alert(`Incorrect! The correct answer is: ${correctAnswer}`);
    }
}
