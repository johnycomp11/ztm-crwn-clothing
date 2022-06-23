// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2U2xJ1yphk2l1XyF8c1rHGtU8GKJbeVI",
  authDomain: "ztm-crwn-clothing-db-67b9f.firebaseapp.com",
  projectId: "ztm-crwn-clothing-db-67b9f",
  storageBucket: "ztm-crwn-clothing-db-67b9f.appspot.com",
  messagingSenderId: "193180632409",
  appId: "1:193180632409:web:d2481c255ae62de21c7848"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Initialize Provider
const provider = new GoogleAuthProvider();
//What do we want GoogleAuthProvider to do.
//Have user select account
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);