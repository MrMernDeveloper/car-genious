// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfuEGCTbdGQyAp56-2hshlj08qq4MVaAw",
  authDomain: "car-genious-6e46b.firebaseapp.com",
  projectId: "car-genious-6e46b",
  storageBucket: "car-genious-6e46b.appspot.com",
  messagingSenderId: "858973276232",
  appId: "1:858973276232:web:498be783af3be80fef307d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;