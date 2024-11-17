// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuG9WFOKt7DCSzXxENMP1LAomTIiuJplI",
    authDomain: "page-ff79b.firebaseapp.com",
    databaseURL: "https://page-ff79b.firebaseio.com",
    projectId: "page-ff79b",
    storageBucket: "page-ff79b.appspot.com",
    messagingSenderId: "595869126328",
    appId: "1:595869126328:web:cb68b72c7b91a697f0ae4d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Reference the number
const numberRef = db.ref('number');

// Listen for changes
numberRef.on('value', (snapshot) => {
    const number = snapshot.val();
    document.getElementById('number').textContent = number;
});
