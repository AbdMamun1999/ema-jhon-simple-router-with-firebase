import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALxGsLEKiENH5p25m1gqJX7ZDkcZEsseU",
  authDomain: "ema-john-router-with-firebase.firebaseapp.com",
  projectId: "ema-john-router-with-firebase",
  storageBucket: "ema-john-router-with-firebase.appspot.com",
  messagingSenderId: "1044787379359",
  appId: "1:1044787379359:web:c2d9258819f48ecb3376aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;