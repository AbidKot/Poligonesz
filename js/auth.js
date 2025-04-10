// js/auth.js

function signUp() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      db.collection("users").doc(user.uid).set({
        email: user.email,
        points: 0,
        rank: "Beginner"
      });

      alert("Sign up successful!");
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}

function logIn() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful!");
      // Redirect to quiz page maybe?
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}

