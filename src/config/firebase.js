// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0H6QDs-haD5YGctH8P_gH0h75W-1TEvk",
  authDomain: "practice-64853.firebaseapp.com",
  projectId: "practice-64853",
  storageBucket: "practice-64853.appspot.com",
  messagingSenderId: "949462170391",
  appId: "1:949462170391:web:5c526a7382026fd64bd552"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function signIn(email,password){
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("login success fully")
    console.log("user==.",user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    alert("Error")
  });
}

export {signIn}