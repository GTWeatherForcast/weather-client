import styles from './SignUp.css';
import "../../App.css";
import { useState } from 'react';

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

// TODO: prevent auto form submission until we want to handle this stuff
  return (
    <div className="cardRoot">
      <h2>SIGN UP FOR FREE</h2>
      <p>We won't bite, we promise</p>
      <form action="" className="signupForm">
        <label for="username">Username</label>
        <input
          id="username"
          className={`${styles.textInput}`}
          type="text"
          placeholder=""
          value={username}
          onChange={(e) => { setUsername(e.target.value); }}
          onSubmit={(e) => { e.preventDefault(); }}
        />

        <label for="email">Email</label>
        <input
          id="email"
          className={`${styles.textInput}`}
          type="text"
          placeholder=""
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
          onSubmit={(e) => { e.preventDefault(); }}
        />  

        <label for="password">Password</label>
        <input
          id="password"
          className={`${styles.textInput}`}
          type="password"
          placeholder=""
          value={password}
          onChange={(e) => { setPassword(e.target.value); }}
          onSubmit={(e) => { e.preventDefault(); }}
        /> 

        <label for="password2">Confirm Password</label>
        <input
          id="password2"
          className={`${styles.textInput}`}
          type="password"
          placeholder=""
          value={password2}
          onChange={(e) => { setPassword2(e.target.value); }}
          onSubmit={(e) => { e.preventDefault(); }}
        /> 

        <input
          id="signup"
          className={`${styles.textInput}`}
          type="submit"
          value="Sign Up"
          onChange={(e) => { e.preventDefault(); }}
          onSubmit={(e) => { e.preventDefault(); }}
        /> 
      </form>
    </div>
  );
}

export default SignUpPage;