import styles from "./FormInput.module.css";
import "../../App.css";
import { useState } from 'react';

export function SubmitButton({ id, value }) {
  return (
    <div className={`${styles.inputDiv} ${styles.submitContainer}`}>
      <input
        id="signup"
        className={`${styles.textInput}`}
        type="submit"
        value="Sign Up"
        // onChange={(e) => { e.preventDefault(); }}
        // onSubmit={(e) => { e.preventDefault(); }}
      />
    </div>
  );
}

export default function FormInput({ type, id, label, placeholder, startValue, onChange }) {
  return (
    <div className={`${styles.inputDiv} ${styles.submitContainer}`}>
      {label !== null || label !== undefined ? <label for={id}>{label}</label> : <></>}
      <input
        className={`${styles.input}`}
        id={id}
        type={type}
        value={startValue}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}