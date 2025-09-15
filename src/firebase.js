// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUs-dNmUBz6dC7Lu3fUYBQPWgaBsRFYVk",
  authDomain: "tamilbrami.firebaseapp.com",
  projectId: "tamilbrami",
  storageBucket: "tamilbrami.firebasestorage.app",
  messagingSenderId: "477318048672",
  appId: "1:477318048672:web:5b228c0fc99856116912c5",
  measurementId: "G-3BBW8M643T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);