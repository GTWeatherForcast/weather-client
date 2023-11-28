import styles from '../inputs/FormInput.module.css';
import FormInput from '../inputs/FormInput';

// todo: form submission, clientside and server-side form validation

function SignUpPage() {
  return (
    <div className="cardRoot">
      <h2 className="centerText">SIGN UP FOR FREE</h2>
      <p className="centerText">We won't bite, we promise</p>

      <form action="" className={`${styles.mainForm}`} onSubmit={(e) => { e.preventDefault() }}>
        
        <FormInput
          type="text"
          id="signup-username"
          label="Username"
          placeholder=""
        />

        <FormInput
          type="email"
          id="signup-email"
          label="Email"
          placeholder=""
        />

        <FormInput
          type="password"
          id="signup-password"
          label="Password"
          placeholder=""
          title="Password requirements: ?"

        />

        <FormInput
          type="password"
          id="signup-password2"
          label="Confirm Password"
          placeholder=""
          title="Please reenter your password."
        />

        <FormInput
          type="submit"
          id="signup"
          value="Sign Up"
        />
      </form>
    </div>
  );
}

export default SignUpPage;
