// Import the necessary Firebase modules (using Firebase v9+ modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuG9WFOKt7DCSzXxENMP1LAomTIiuJplI",
    authDomain: "page-ff79b.firebaseapp.com",
    databaseURL: "https://page-ff79b-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "page-ff79b",
    storageBucket: "page-ff79b.appspot.com",
    messagingSenderId: "595869126328",
    appId: "1:595869126328:web:cb68b72c7b91a697f0ae4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Reference the 'number' data in Firebase
const numberRef = ref(db, 'number');

// Listen for changes to the 'number' in Firebase and update the page
onValue(numberRef, (snapshot) => {
    const number = snapshot.val();
    // Update the page with the new number value
    document.getElementById('number').textContent = number ? number : "No number available";
});
