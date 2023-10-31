import styles from '../inputs/FormInput.module.css';
import "../../App.css";
import FormInput from '../inputs/FormInput';

// todo: form submission, clientside and server-side form validation

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