import styles from "./Landing.module.css";
import { LocationSearch } from "../inputs/SearchBar"

function LandingPage() {
  return (
    <div className={`${styles.landingBody}`}>
      <nav className={`${styles.mainNav} ${styles.textStyle}`}>
        <ol>
          <li><a href=".">gt forecast</a></li>
        </ol>
        <ol>
          <li><a href="./login">sign in</a></li>
          <li><a href="./signup">sign up</a></li>
        </ol>
      </nav>

      <div id={styles["content-container"]}>
        <p id={styles["welcome"]} className={`${styles.center} ${styles.textStyle}`}>
          Welcome to Georgia Tech Weather Forecast!
        </p>
        <div id={styles["rectangle"]}></div>
        <LocationSearch />
      </div>
    </div>
  );
}

export default LandingPage;
