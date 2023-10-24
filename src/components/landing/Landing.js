import styles from "./Landing.module.css";
import { LocationSearch } from "../inputs/SearchBar"
import { Outlet, Link } from "react-router-dom"
import { useState } from "react";

export function LandingCard({ isShowingLeftCard = false, isShowingRightCard = false }) {  
  return (
    <div className={`${styles.landingBody} ${ isShowingLeftCard ? styles.shiftForLeft : ""} ${ isShowingRightCard ? styles.shiftForRight : ""}`}>
      <div className={styles.landingNav}>
        <nav className={`${styles.mainNav} ${styles.textStyle}`}>
          <ol>
            <li><Link to="/">gt forecast</Link></li>
          </ol>
          <ol>
            <li><Link to="/login">sign in</Link></li>
            <li><Link to="/signup">sign up</Link></li>
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

      <LandingCard isShowingLeftCard={isShowingLeftCard} isShowingRightCard={isShowingRightCard} />

      <div className={styles.cardRight}>
        right card
      </div>
    </div>
  );
}
