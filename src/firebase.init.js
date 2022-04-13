import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ6b9te2KEuOJQUoReUlWqeCVity43epE",
  authDomain: "ema-jhon-simple-with-firebase.firebaseapp.com",
  projectId: "ema-jhon-simple-with-firebase",
  storageBucket: "ema-jhon-simple-with-firebase.appspot.com",
  messagingSenderId: "263858338648",
  appId: "1:263858338648:web:b8d2b78946d610b467832d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);