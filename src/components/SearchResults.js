import "./SearchResults.css";
import { useState, useEffect } from "react";
import { url, options } from "../api.js" 

const SearchResults = ({results}) => {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    function redirect() {
        window.location.href = "/mainpage";
        console.log("Hello");
    }
    useEffect(() => {
        console.log(latitude);
      }, [latitude]);   
    useEffect(() => {
        console.log(longitude);
      }, [longitude]);
    return <div className = "results-list">
        {
            results.map((result, id) => {
                return <button key= {id} onClick = {() => {
                    const array = result.value.split(",");
                    setLatitude(array[0]);                 
                    setLongitude(array[1]);
                    redirect();
                }}
                >{result.label}</button>
            })
        }
    </div>
};

export default SearchResults;