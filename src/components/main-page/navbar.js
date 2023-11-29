/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./navbar.module.css";
import LocationSearch from "../inputs/SearchBar";
import { Link } from "react-router-dom";
import SearchResults from "../SearchResults";
import { useState }  from "react";

function NavBar({sendDataToGParent}) {
  const [search, setSearch] = useState([]);
  const [value, setValue] = useState();
  const [wdata, setWData] = useState([]);

  const handleChildData = (data) => {
      setWData(data);
      sendDataToGParent(data);
  }
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
      <div id={styles.search} className={`${styles.searching} ${styles.navGroup} flexCenter`}>
        <LocationSearch setSearch={setSearch} setValue={setValue}>
          <SearchResults results = {search} sendDataToParent={handleChildData} searchValue = {value}/>
        </LocationSearch>
      </div>
      <div className={`${styles.navGroup} flexRight`}>
        <Link
          to={"/"}
          // replace={true}
          className={`${styles.fakeLink} textStyle`}
          // onClick={toggleSignUp}
        >
          log out
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
