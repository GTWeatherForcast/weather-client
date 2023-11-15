import React from "react";
import styles from "./navbar.module.css";
import { LocationSearch } from "../inputs/SearchBar";

function navbar() {
  return (
    <nav className={`${styles.navbar}`}>
      <div>
        <button className={`${styles.textStyle}`}>gt forecast</button>
      </div>
      <div className={styles.center}>
        <LocationSearch />
      </div>
    </nav>
  );
}

export default navbar;
