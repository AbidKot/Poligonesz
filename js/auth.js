// js/firebase-config.js
  const firebaseConfig = {
    apiKey: "AIzaSyBT-U0wsAxf0w14THOt5AeyyO4jd9pgY1s",
    authDomain: "mumtazalgebra-d6768.firebaseapp.com",
    projectId: "mumtazalgebra-d6768",
    storageBucket: "mumtazalgebra-d6768.firebasestorage.app",
    messagingSenderId: "721553587532",
    appId: "1:721553587532:web:32299e7e11d9cc8535a3e9"
  };

firebase.initializeApp(firebaseConfig);

// Make Firebase services global (if needed elsewhere)
const auth = firebase.auth();
const db = firebase.firestore();
