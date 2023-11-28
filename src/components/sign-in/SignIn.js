import styles from '../inputs/FormInput.module.css';
import FormInput from '../inputs/FormInput';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

// todo: form submission, clientside and server-side form validation

export default function SignInPage() {
  const navigate = useNavigate()
  const auth = () => {
    axios.post('http://localhost:8080/api/v1/auth/sign-in', {
      username: document.getElementById("login-username").value,
      password: document.getElementById("login-password").value
    }).then((response) => {
      console.log(response.data.message)
      navigate("/mainpage")
    }).catch((error) => {
      console.error('Error communicating with server', error);
      alert("Username or password is invalid!")
    });
  }

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
          onClick= {auth}
        />
      </form>
    </div>
  );
}