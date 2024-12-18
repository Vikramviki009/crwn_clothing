// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhVlCkc8OI0U639TScFKNRfGeeYaFgqHI",
  authDomain: "crwn-clothing-db-f10d4.firebaseapp.com",
  projectId: "crwn-clothing-db-f10d4",
  storageBucket: "crwn-clothing-db-f10d4.firebasestorage.app",
  messagingSenderId: "331732586607",
  appId: "1:331732586607:web:ba05be73b6b43c70edfd9a",
};

// Initilize app
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

// sign in with popup
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// creating and storing user auth in firestore

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());
  if (!userSnapShot.exists()) {
    const { displayName = "", email = "" } = userAuth || {};
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
      console.log("user created");
      // return userDocRef;
    } catch (error) {
      console.log(`Error creating User: ${error.message}`);
    }
  }
  return userDocRef;
};
