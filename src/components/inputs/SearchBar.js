import styles from './SearchBar.module.css';
import { useState } from "react";
import { url, options } from "../../api.js" 

const LocationSearch = ({ setSearch }) => {
  const [locationString, setLocationString] = useState("");

  const handleOnChange = (searchData) => {
    setLocationString(searchData);
    loadOptions(searchData);
  }

  const loadOptions = (inputValue) => {
    return fetch(`${url}/cities?minPopulation=1000000&namePrefix=${inputValue}`, options)
    .then(response => response.json())
    .then(response => {
        const results = response.data?.map((city) => {
          return {
            value: `${city.latitude}, ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`
          };
        });
        setSearch(results);
      })
    .then(err => console.error(err))
  }

  return (
    <div className={`${styles.searchBarDiv}`}>
        <input
          id="locationSearch"
          className={`${styles.searchBar}`}
          type="search"
          placeholder="Search City, Country, or Zip Code"
          value={locationString}
          onChange={(e) => handleOnChange(e.target.value)}
        />      
    </div>
  );
}

export default LocationSearch;