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
      <h2 className="centerText">SIGN UP FOR FREE</h2>
      <p className="centerText">We won't bite, we promise</p>

      <form action="" className="signupForm">
        <div className="inputDiv">
          <label for="username">Username</label>
          <input
            id="username"
            className={`${styles.textInput}`}
            type="text"
            data-label="Username"
            placeholder=""
            value={username}
            onChange={(e) => { setUsername(e.target.value); }}
            onSubmit={(e) => { e.preventDefault(); }}
          />
        </div>

        <div className="inputDiv">
          <label for="email">Email</label>
          <input
            id="email"
            className={`${styles.textInput}`}
            type="text"
            data-label="Email"
            placeholder=""
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
            onSubmit={(e) => { e.preventDefault(); }}
          />  
        </div>

        <div className="inputDiv">
          <label for="password">Password</label>
          <input
            id="password"
            className={`${styles.textInput}`}
            type="password"
            data-label="Password"
            placeholder=""
            value={password}
            onChange={(e) => { setPassword(e.target.value); }}
            onSubmit={(e) => { e.preventDefault(); }}
          /> 
        </div>

        <div className="inputDiv">
          <label for="password2">Confirm Password</label>
          <input
            id="password2"
            className={`${styles.textInput}`}
            type="password"
            data-label="Password"
            placeholder=""
            value={password2}
            onChange={(e) => { setPassword2(e.target.value); }}
            onSubmit={(e) => { e.preventDefault(); }}
          /> 
        </div>

        <div className="inputDiv submitContainer">
          <input
            id="signup"
            className={`${styles.textInput}`}
            type="submit"
            value="Sign Up"
            onChange={(e) => { e.preventDefault(); }}
            onSubmit={(e) => { e.preventDefault(); }}
          /> 
        </div>

        

        




      </form>
    </div>
  );
}

export default SignUpPage;