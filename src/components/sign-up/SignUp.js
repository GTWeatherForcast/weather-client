// import styles from './SignUp.css';
import { useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignUpPage() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordtwo, confirmPassword] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const API_URL = 'http://localhost:8080/sign-up';)
    if(!username) {
      alert("Username is blank.")
    }
    else if(!email) {
      alert("Email is blank.")
    }
    else if(!password) {
      alert("Password is blank.")
    }
    else if(!passwordtwo) {
      alert("Please confirm password.")
    }
    else if(password !== passwordtwo) {
      alert("Password confirm password correctly.")
    }

    else {
      axios.post('http://localhost:8080/api/v1/auth/sign-up', {
      username: username,
      email: email,
      password: password,
      })
      .then((response) => {
        
        console.log(response.data.message);
        navigate("/")


      }).catch((error) => {

        console.error('Error communicating with server', error);
      });
    }
  }


  const signUpButton = () => {
    navigate("/");
  }

  return (
    <div>
      <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>username:</label>
      <input 
        type="username" 
        onChange={(e) => setUsername(e.target.value)} 
        value={username} 
      />
      
      <label>email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />

      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <label>Confirm Password:</label>
      <input 
        type="password" 
        onChange={(e) => confirmPassword(e.target.value)} 
        value={passwordtwo} 
      />

      {/* <button onClick={signUpButton}>Sign up</button> */}
      <button>Sign up</button>
      </form>
      <p>
        <button onClick = {signUpButton}>Back PLS</button>
      </p>
    </div>

  );
}
export default SignUpPage;