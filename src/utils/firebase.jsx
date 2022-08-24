// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAthEW8jaOHLOW2aNzw5_sVuLwzyAczzP0",
  authDomain: "pokemones-2e05c.firebaseapp.com",
  projectId: "pokemones-2e05c",
  storageBucket: "pokemones-2e05c.appspot.com",
  messagingSenderId: "807012944862",
  appId: "1:807012944862:web:f81fd561a242fbc9d92b4f",
  measurementId: "G-FVKEV9R7MN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
