import styles from './SearchBar.css';
import { useState } from "react";

function LocationSearch() {
  const [locationString, setLocationString] = useState("");

  return (
    <form action="">
      <input
        id="locationSearch"
        type="text"
        placeholder="Search City, Country, or Zip Code"
        value={locationString}
        onChange={(e) => { setLocationString(e.target.value); }}
        onSubmit={(e) => { e.preventDefault(); }}
      />        
    </form>
  );
}

export default LocationSearch;