import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWSBaC8Ivz65EagNjYWs1t4P9lJWQJw0I",
  authDomain: "ema-jhon-simple-with-fir-fc727.firebaseapp.com",
  projectId: "ema-jhon-simple-with-fir-fc727",
  storageBucket: "ema-jhon-simple-with-fir-fc727.appspot.com",
  messagingSenderId: "1089489429769",
  appId: "1:1089489429769:web:ee3308d37e6682d24ddfd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;