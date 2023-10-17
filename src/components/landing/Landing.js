import styles from "./Landing.module.css";

function LandingPage() {
  const signInClick = () => {};
  const signUpClick = () => {};
  return (
    <div className={`${styles.landingBody}`}>
      <nav>
        <ul>
          <li className={styles.sign}>
            <a className={`${styles.navBarText} ${styles.textstyle}`} onClick={() => signInClick}>
              sign in
            </a>
          </li>

          <li className={styles.sign}>
            <a className={`${styles.sign} ${styles.navBarText} ${styles.textstyle}`} onClick={() => signUpClick}>
              sign up
            </a>
          </li>
        </ul>
      </nav>

      {/* <a id="textstyle" href="#">
        gt forecast`

      </a> */}

      <div id={styles["content-container"]}>
        <p id={styles["welcome"]} className={`${styles.center} ${styles.textstyle}`}>
          Welcome to Georgia Tech Weather Forecast!
        </p>
        <div id={styles["rectangle"]}></div>
      </div>
    </div>
  );
}

export default LandingPage;
