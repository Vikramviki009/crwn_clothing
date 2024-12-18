import React, { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

function SignIn() {
  const handleSignInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log(userDocRef, "created user");
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button type="submit" onClick={handleSignInWithGoogle}>
        Sign in with Google popup
      </button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;
