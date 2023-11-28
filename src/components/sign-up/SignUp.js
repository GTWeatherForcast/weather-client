import styles from '../inputs/FormInput.module.css';
import FormInput from '../inputs/FormInput';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

// todo: form submission, clientside and server-side form validation

function SignUpPage() {
  const navigate = useNavigate()

  const auth = () => {
    if (!document.getElementById("signup-username").value) {
      alert("Username is empty!")
    }
  
    else if (!document.getElementById("signup-email").value) {
      alert("Email is empty!")
    }
  
    else if (!document.getElementById("signup-password").value) {
      alert("Password is empty!")
    }
  
    else if (!document.getElementById("signup-password2").value) {
      alert("Confirm password is empty!")
    }
  
    else if (document.getElementById("signup-password").value !== document.getElementById("signup-password2").value) {
      alert("Passwords are not the same!")
    }
    
    else {
      axios.post('http://localhost:8080/api/v1/auth/sign-up', {
        username: document.getElementById("signup-username").value,
        email: document.getElementById("signup-email").value,
        password: document.getElementById("signup-password").value
      }).then((response) => {
        console.log(response.data.message)
        navigate("/mainpage")
      }).catch((error) => {
        console.error('Error communicating with server', error);
        alert("Error")
      });
    }
  }

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
          onClick= {auth}
        />
      </form>
    </div>
  );
}

export default SignUpPage;
