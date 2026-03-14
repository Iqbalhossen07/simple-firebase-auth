// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcKclY_Xcup23fslIyWSw2XjPgDSIkcB0",
  authDomain: "simple-firbase-auth-e8296.firebaseapp.com",
  projectId: "simple-firbase-auth-e8296",
  storageBucket: "simple-firbase-auth-e8296.firebasestorage.app",
  messagingSenderId: "699363709758",
  appId: "1:699363709758:web:17debac036870add02926f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
