
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDUs-dNmUBz6dC7Lu3fUYBQPWgaBsRFYVk",
  authDomain: "tamilbrami.firebaseapp.com",
  projectId: "tamilbrami",
  storageBucket: "tamilbrami.firebasestorage.app",
  messagingSenderId: "477318048672",
  appId: "1:477318048672:web:5b228c0fc99856116912c5",
  measurementId: "G-3BBW8M643T"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);