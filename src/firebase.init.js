// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1L2J4NZAPh5ou71aPYJlJUrpimymKmd8",
  authDomain: "privet-route-context-api.firebaseapp.com",
  projectId: "privet-route-context-api",
  storageBucket: "privet-route-context-api.appspot.com",
  messagingSenderId: "37065233560",
  appId: "1:37065233560:web:049d2cecc451604b382ced"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app