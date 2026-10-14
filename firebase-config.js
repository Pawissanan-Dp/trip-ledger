// Paste your Firebase web app settings between the quotes (README, step 2).
// Leave apiKey as PASTE_API_KEY to run in single-browser demo mode.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZLSK9GAQ8KRTXWcvUWQrE1k9WArb2mhg",
  authDomain: "trip-ledger-github.firebaseapp.com",
  projectId: "trip-ledger-github",
  storageBucket: "trip-ledger-github.firebasestorage.app",
  messagingSenderId: "832293982415",
  appId: "1:832293982415:web:468a2b578bae8e4f18e7ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
