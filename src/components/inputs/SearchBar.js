import styles from './SearchBar.module.css';
import { useState } from "react";

export function SearchBar() {
  const [searchStr, setSearchStr] = useState("");

  return (
    <div className={`${styles.searchBarDiv}`}>
      <form action="">
        <input
          id=""
          className={`${styles.searchBar}`}
          type="text"
          placeholder="Search"
          value={searchStr}
          onChange={(e) => { setSearchStr(e.target.value); }}
          onSubmit={(e) => { e.preventDefault(); }}
        />        
      </form>
    </div>
  );
}

export function LocationSearch() {
  const [locationString, setLocationString] = useState("");

  return (
    <div className={`${styles.searchBarDiv}`}>
      <form action="">
        <input
          id="locationSearch"
          className={`${styles.searchBar}`}
          type="text"
          placeholder="Search City, Country, or Zip Code"
          value={locationString}
          onChange={(e) => { setLocationString(e.target.value); }}
          onSubmit={(e) => { e.preventDefault(); }}
        />        
      </form>
    </div>
  );
}

export default SearchBar;