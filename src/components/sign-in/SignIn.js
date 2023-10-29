import styles from '../inputs/FormInput.module.css';
import "../../App.css";
import FormInput from '../inputs/FormInput';

// todo: form submission
export default function SignInPage() {
  // todo: still need to do server-side form validation
  return (
    <div className="cardRoot">
      <h2 className="centerText">LOGIN</h2>
      <p className="centerText">Welcome back!</p>

      <form action="" className={`${styles.mainForm}`} onSubmit={(e) => { e.preventDefault() }}>
        
        <FormInput
          type="text"
          id="username"
          label="Username"
          placeholder=""
        />

        <FormInput
          type="password"
          id="password"
          label="Password"
          placeholder=""
        />

        <FormInput
          type="submit"
          id="signup"
          value="Sign In"
        />
      </form>
    </div>
  );
}