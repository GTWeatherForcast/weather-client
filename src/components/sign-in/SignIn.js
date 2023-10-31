import styles from '../inputs/FormInput.module.css';
import "../../App.css";
import FormInput from '../inputs/FormInput';

// todo: form submission, clientside and server-side form validation

export default function SignInPage() {
  return (
    <div className="cardRoot">
      <h2 className="centerText">LOGIN</h2>
      <p className="centerText">Welcome back!</p>

      <form action="" className={`${styles.mainForm}`} onSubmit={(e) => { e.preventDefault() }}>
        
        <FormInput
          type="text"
          id="login-username"
          label="Username"
          placeholder=""
        />

        <FormInput
          type="password"
          id="login-password"
          label="Password"
          placeholder=""
        />

        <FormInput
          type="submit"
          id="login"
          value="Sign In"
        />
      </form>
    </div>
  );
}