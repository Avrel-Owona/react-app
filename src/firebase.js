// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSxLQSCZYpdXPeeD2zxIZI-FbeD7X90P0",
    authDomain: "react-auth-b77b5.firebaseapp.com",
    projectId: "react-auth-b77b5",
    storageBucket: "react-auth-b77b5.appspot.com",
    messagingSenderId: "527493535044",
    appId: "1:527493535044:web:dcf9dd00cb2f93db327311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Instance d'auth
export const auth = getAuth(app)
export default app