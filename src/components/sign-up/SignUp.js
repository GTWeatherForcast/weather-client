import styles from '../inputs/FormInput.module.css';
import "../../App.css";
import FormInput from '../inputs/FormInput';

function noAction(e) {
  try {
    e.preventDefault();
  } catch { }
}

// todo: form submission
// commented this line out since it's a complicated mess for
// ending up only having one way to submit this form at the end of the day
// function SignUpPage({ onSubmit = (e) => {noAction(e)} }) {
function SignUpPage() {
  // todo: still need to do server-side form validation
  return (
    <div className="cardRoot">
      <h2 className="centerText">SIGN UP FOR FREE</h2>
      <p className="centerText">We won't bite, we promise</p>

      {/* This line was meant to be used with the commented-out function header */}
      {/* <form action="" className={`${styles.mainForm}`} onSubmit={(e) => { onSubmit(e) }}> */}
      <form action="" className={`${styles.mainForm}`} onSubmit={(e) => { e.preventDefault() }}>
        
        <FormInput
          type="text"
          id="username"
          label="Username"
          placeholder=""
        />

        <FormInput
          type="email"
          id="email"
          label="Email"
          placeholder=""
          // onClick={(e) => { console.log(`Email pattern: ${e.target.pattern}`)} }
        />

        <FormInput
          type="password"
          id="password"
          label="Password"
          placeholder=""
          title="Password requirements: ?"

        />

        <FormInput
          type="password"
          id="password2"
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