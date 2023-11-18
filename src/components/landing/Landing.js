import styles from "./Landing.module.css";
import { LocationSearch } from "../inputs/SearchBar";
import SignInPage from "../sign-in/SignIn";
import SignUpPage from "../sign-up/SignUp";
import { useState } from "react";
import { Link } from "react-router-dom";

// 0 = left card
// 1 = no card
// 2 = right card
export function LandingCard({ setCardIndex, cardIndex = 1 }) {
  function returnToLanding() {
    setCardIndex(1);
    // window.history.replaceState(null, "", "..");
  }

  function toggleSignUp() {
    if (cardIndex === 2) {
      returnToLanding();
    } else {
      setCardIndex(2);
      // window.history.replaceState(null, "", "signup");
    }
  }

  function toggleSignIn() {
    if (cardIndex === 0) {
      returnToLanding();
    } else {
      setCardIndex(0);
      // window.history.replaceState(null, "", "login");
    }
  }

  return (
    <div
      className={`${styles.landingBody} ${
        cardIndex === 0
          ? styles.shiftForLeft
          : cardIndex === 2
          ? styles.shiftForRight
          : ""
      }`}
    >
      <div className={styles.landingNav}>
        <nav className={`${styles.mainNav}`}>
          <ol>
            <li>
              <Link
                to={"/"}
                replace={true}
                className={`${styles.fakeLink} textStyle`}
                onClick={returnToLanding}
              >
                gt forecast
              </Link>
            </li>
          </ol>
          <ol>
            <li>
              <Link
                to={"/login"}
                replace={true}
                className={`${styles.fakeLink} textStyle`}
                onClick={toggleSignIn}
              >
                sign in
              </Link>
            </li>
            <li>
              <Link
                to={"/signup"} 
                replace={true}
                className={`${styles.fakeLink} textStyle`}
                onClick={toggleSignUp}
              >
                sign up
              </Link>
            </li>
          </ol>
        </nav>
      </div>

      <div id={styles["content-container"]}>
        <p id={styles["welcome"]} className={`${styles.center} textStyle`}>
          Welcome to Georgia Tech Weather Forecast!
        </p>
        <div id={styles["rectangle"]}></div>
        <LocationSearch />
      </div>
    </div>
  );
}

export default function LandingPage({ initialCardIndex = 1 }) {
  const [cardIndex, setCardIndex] = useState(initialCardIndex);

  return (
    <div className={styles.landingRoot}>
      <div className={styles.cardLeft}>
        <SignInPage />
      </div>

      <LandingCard setCardIndex={setCardIndex} cardIndex={cardIndex} />

      <div className={styles.cardRight}>
        <SignUpPage />
      </div>
    </div>
  );
}
