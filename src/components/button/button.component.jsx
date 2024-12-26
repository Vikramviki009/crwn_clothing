import React from "react";
import styles from "./button.styles.module.scss";

export const BUTTON_TYPE_CLASSES = {
  google: "googleSignIn",
  inverted: "inverted",
};

function Button({ children, buttonType, ...otherProps }) {
  return (
    <button
      className={`${styles.buttonContainer} ${
        buttonType ? styles[`${buttonType}`] : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
