// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOib_8BZUo4l-u8zZl7uafpA2En-N8b0A",
  authDomain: "realtor-clone-react-27789.firebaseapp.com",
  projectId: "realtor-clone-react-27789",
  storageBucket: "realtor-clone-react-27789.appspot.com",
  messagingSenderId: "461937099688",
  appId: "1:461937099688:web:65b742f0dad1c66e42939d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db= getFirestore();