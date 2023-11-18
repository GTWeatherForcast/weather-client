import React from "react";
import styles from "./navbar.module.css";
import { LocationSearch } from "../inputs/SearchBar";
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <nav className={`${styles.mainNav}`}>
      <div className={`${styles.navGroup} flexLeft`}>
        <Link
            to={"/"}
            // replace={true}
            className={`${styles.fakeLink} textStyle`}
            // onClick={returnToLanding}
          >
            gt forecast
          </Link>
        </div>
      <div id={ styles.search } className={`${styles.navGroup} flexCenter`}>
        <LocationSearch />
      </div> 
      <div className={`${styles.navGroup} flexRight`}>
        <Link
          to={"/login"}
          // replace={true}
          className={`${styles.fakeLink} textStyle`}
          // onClick={toggleSignIn}
        >
          sign in
        </Link>
        <Link
          to={"/signup"} 
          // replace={true}
          className={`${styles.fakeLink} textStyle`}
          // onClick={toggleSignUp}
        >
          sign up
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
