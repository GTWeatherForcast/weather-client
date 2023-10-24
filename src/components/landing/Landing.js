import styles from "./Landing.module.css";
import "../../App.css"
import { LocationSearch } from "../inputs/SearchBar"
import SignInPage from "../sign-in/SignIn";
import SignUpPage from "../sign-up/SignUp";
import { useState } from "react";

// 0 = left card
// 1 = no card
// 2 = right card
export function LandingCard({ setCardIndex, cardIndex = 1 }) {  

  function returnToLanding() {
    setCardIndex(1);
    window.history.replaceState(null, "", "..");
    // todo: modify URL to have / without updating page
  }

  function toggleSignUp() {
    if (cardIndex === 2) {
      returnToLanding();
    } else {
      setCardIndex(2);
      window.history.replaceState(null, "", "signup");
      // todo: modify URL to have /login without updating page
    }
  }

  function toggleSignIn() {
    if (cardIndex === 0) {
      returnToLanding();
    } else {
      setCardIndex(0);
      window.history.replaceState(null, "", "login");
      // todo: modify URL to have /signup without updating page
    }
  }

  return (
    <div className={`${styles.landingBody} ${ cardIndex === 0 ? styles.shiftForLeft : (cardIndex === 2 ? styles.shiftForRight : "")}`}>
      <div className={styles.landingNav}>
        <nav className={`${styles.mainNav} textStyle`}>
          <ol>
            {/* <li><Link to="/">gt forecast</Link></li> */}
            <li><button className={`${styles.fakeLink} textStyle`} onClick={returnToLanding}>gt forecast</button></li>
          </ol>
          <ol>
            <li><button className={`${styles.fakeLink} textStyle`} onClick={toggleSignIn}>SIGN IN</button></li>
            <li><button className={`${styles.fakeLink} textStyle`} onClick={toggleSignUp}>SIGN UP</button></li>
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
      {/* todo: change classes to reflect whether it is signup or login page so we can move stuff around */}
    </div>
  );
}

export default function LandingPage({initialCardIndex = 1}) {
  const [cardIndex, setCardIndex] = useState(initialCardIndex);
  
  return (
    <div className={styles.landingRoot}>
      <div className={styles.cardLeft}>
        <SignInPage />
      </div>

      <LandingCard setCardIndex={setCardIndex} cardIndex={cardIndex}/>

      <div className={styles.cardRight}>
        <SignUpPage />
      </div>
    </div>
  );
}
