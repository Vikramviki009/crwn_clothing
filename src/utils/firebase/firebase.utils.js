// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
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
  const userDocRef = doc(db, "users", userAuth?.uid);
  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error("Error creating user: ", error);
    }
  }
  console.log(userDocRef, "userDocRef");
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return response;
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      alert("Email already in use");
      return;
    }
    console.error(
      "Error signing up with user email and password",
      error.message
    );
  }
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    if (error.code === "auth/invalid-credential") {
      alert("Invalid credentials");
      return;
    }
    console.error(
      "Error signing in with user email and password",
      error.message
    );
  }
};
