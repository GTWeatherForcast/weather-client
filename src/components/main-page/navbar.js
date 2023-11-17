import React from "react";
import styles from "./navbar.module.css";
import { LocationSearch } from "../inputs/SearchBar";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <div className={styles.landingNav}>
      <nav className={`${styles.mainNav}`}>
        <ol>
          <li>
            <Link to={"/"} className={`${styles.fakeLink} textStyle`}>
              gt forecast
            </Link>
          </li>
        </ol>
        <ol>
          <li>
            <button
              className={`${styles.fakeLink} textStyle`}
              // onClick={toggleSignIn}
            >
              sign in
            </button>
          </li>
          <li>
            <button
              className={`${styles.fakeLink} textStyle`}
              // onClick={toggleSignUp}
            >
              sign up
            </button>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default NavBar;
