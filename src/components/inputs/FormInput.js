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

/** Custom-styled wrapper for an HTML input tag.
 * @param {String} id 
 * @param {String} type 
 * @param {String} label Optional
 * @param {...*} ...props Any attributes to be passed to the input tag */
export default function FormInput({ id, type, label, ...props }) {
  // const [value, setValue] = useState(startValue);
  return (
    <div className={`${styles.inputDiv} ${type === "submit" ? styles.submitContainer : null}`}>
      {label !== null || label !== undefined ? <label for={id}>{label}</label> : <></>}
      <input
        id={id}
        type={type}
        className={`${styles.input}`}
        {...props}
      />
    </div>
  );
}