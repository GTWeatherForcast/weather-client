import styles from "./Landing.module.css";
import { LocationSearch } from "../inputs/SearchBar"
import { Outlet, Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <div className={styles.landingRoot}>
      <div className={styles.cardLeft}>
        left card
      </div>

      {/* ${styles.shiftForRight} ${styles.shiftForLeft} */}
      <div className={`${styles.landingBody} `}>
        <div className={styles.landingNav}>
          <nav className={`${styles.mainNav} ${styles.textStyle}`}>
            <ol>
              <li><Link to=".">gt forecast</Link></li>
            </ol>
            <ol>
              <li><Link to="./login">sign in</Link></li>
              <li><Link to="./signup">sign up</Link></li>
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
        <Outlet />
      </div>

      <div className={styles.cardRight}>
        right card
      </div>
    </div>
  );
}
