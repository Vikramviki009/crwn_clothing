import React from "react";
import styles from "./form-input.styles.module.scss";

function FormInput({ label, ...otherProps }) {
  return (
    <div className={styles.group}>
      <input className={styles.formInput} {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value.length > 0 ? styles.shrink : ""} ${
            styles.formInputLabel
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
