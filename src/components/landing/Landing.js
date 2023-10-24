import styles from "./Landing.module.css";
import { LocationSearch } from "../inputs/SearchBar"
import { Link } from "react-router-dom"
import { useState } from "react";

// 0 = no cards, 1 = signin (right), 2 = signup (left)
export function LandingCard({ cardIndex = 0 }) {  

  function toggleSignIn() {

  }

  function toggleSignUp() {

  }

  return (
    <div className={`${styles.landingBody} ${ cardIndex === 2 ? styles.shiftForLeft : (cardIndex === 1 ? styles.shiftForRight : "")}`}>
      <div className={styles.landingNav}>
        <nav className={`${styles.mainNav} ${styles.textStyle}`}>
          <ol>
            <li><Link to="/">gt forecast</Link></li>
          </ol>
          <ol>
            <li><button className={`${styles.fakeLink} ${styles.textStyle}`} onClick={toggleSignIn}>sign in</button></li>
            <li><button className={`${styles.fakeLink} ${styles.textStyle}`} onClick={toggleSignUp}>sign up</button></li>
          </ol>
        </nav>
      </div>

      <div id={styles["content-container"]}>
        <p id={styles["welcome"]} className={`${styles.center} ${styles.textStyle}`}>
          Welcome to Georgia Tech Weather Forecast!
        </p>
        <div id={styles["rectangle"]}></div>
        <LocationSearch />
      </div>
      {/* todo: change classes to reflect whether it is signup or login page so we can move stuff around */}
    </div>
  );
}

export default function LandingPage() {
  const [isShowingLeftCard, showLeftCard] = useState(false);
  const [isShowingRightCard, showRightCard] = useState(false);
  
  return (
    <div className={styles.landingRoot}>
      <div className={styles.cardLeft}>
        left card
      </div>

      <LandingCard cardIndex={0}/>

      <div className={styles.cardRight}>
        right card
      </div>
    </div>
  );
}
