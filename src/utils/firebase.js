// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf8Q_OY6CHq0OcBTdZAZ5h25fKEtbvj40",
  authDomain: "netflix-gpt-7ff19.firebaseapp.com",
  projectId: "netflix-gpt-7ff19",
  storageBucket: "netflix-gpt-7ff19.appspot.com",
  messagingSenderId: "192375234218",
  appId: "1:192375234218:web:96d126926ef824cf167ad3",
  measurementId: "G-WJMY4XBVTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();