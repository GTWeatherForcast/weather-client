import React from "react";
import styles from "./navbar.module.css";
import { LocationSearch } from "../inputs/SearchBar";

function navbar() {
  return (
    <nav className={`${styles.navbar}`}>
      <div>
        <button className={`${styles.textStyle} ${styles.logo}`}>
          gt forecast
        </button>
      </div>
      <div className={`${styles.center} ${styles.searchBar} `}>
        <LocationSearch />
      </div>
    </nav>
  );
}

export default navbar;
