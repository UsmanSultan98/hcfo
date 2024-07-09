// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE-PtIYmHSjfmhpGwaBdUgwbTSj3LJ4Qc",
  authDomain: "heal-cfo.firebaseapp.com",
  projectId: "heal-cfo",
  storageBucket: "heal-cfo.appspot.com",
  messagingSenderId: "571770919820",
  appId: "1:571770919820:web:61fcc0b06692ea9ca3d4a9",
  measurementId: "G-NMT754E774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);