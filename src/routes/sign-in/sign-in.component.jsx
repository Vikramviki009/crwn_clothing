import React from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

function SignIn() {
  const handleSignInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log(userDocRef);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button type="submit" onClick={handleSignInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default SignIn;
