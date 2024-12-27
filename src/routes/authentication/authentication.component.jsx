import React from "react";
import styles from "./authentication.module.scss";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

function Authentication() {
  return (
    <div className={styles.authenticationContainer}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
