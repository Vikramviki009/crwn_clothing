import React, { useCallback, useState } from "react";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import styles from "./sign-in-form.module.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields || {};

  const handleSignInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log(userDocRef, "User Info");
  };

  const resetFormFields = useCallback(() => {
    setFormFields(defaultFormFields);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await signInAuthUserWithEmailAndPassword(email, password);
    if (result) {
      console.log(result);
      resetFormFields();
    }
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormFields((props) => ({ ...props, [name]: value }));
  }, []);

  return (
    <div className={styles.signInContainer}>
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label={"Password"}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className={styles.buttonsContainer}>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={handleSignInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;