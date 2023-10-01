// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS1iqA6ymZx-KQ0nhOObxWHrV8TR_0kOs",
  authDomain: "simple-login-form-1b606.firebaseapp.com",
  projectId: "simple-login-form-1b606",
  storageBucket: "simple-login-form-1b606.appspot.com",
  messagingSenderId: "799408248726",
  appId: "1:799408248726:web:819ecc81c6d4059c2fefb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth