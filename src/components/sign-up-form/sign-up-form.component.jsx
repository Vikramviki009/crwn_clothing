import React, { useCallback, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import styles from "./sign-up-form.module.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { confirmPassword, displayName, email, password } = formFields || {};

  const resetFormFields = useCallback(() => {
    setFormFields(defaultFormFields);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const result = await createAuthUserWithEmailAndPassword(email, password);
    if (result) {
      console.log(result);
      createUserDocumentFromAuth({ ...result.user, displayName });
      resetFormFields();
    }
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormFields((props) => ({ ...props, [name]: value }));
  }, []);

  // useEffect(() => {
  //   console.log(formFields);
  // }, [formFields]);

  return (
    <div className={styles.signUpContainer}>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
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

        <FormInput
          label={"Confirm Password"}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type="submit">SignUp</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
