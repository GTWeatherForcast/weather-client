import styles from "./Landing.css";

function LandingPage() {
  const signInClick = () => {};
  const signUpClick = () => {};
  return (
    <div>
      <nav>
        <ul>
          <li class="sign">
            <a class="navBarText textstyle" onClick={() => signInClick}>
              sign in
            </a>
          </li>

          <li class="sign">
            <a class="sign navBarText textstyle" onClick={() => signUpClick}>
              sign up
            </a>
          </li>
        </ul>
      </nav>

      {/* <a id="textstyle" href="#">
        gt forecast`

      </a> */}

      <div id="content-container">
        <p id="welcome" class="center textstyle">
          Welcome to Georgia Tech Weather Forecast!
        </p>

        <div class="center">
          <div id="rectangle"></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
