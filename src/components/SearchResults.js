import "./SearchResults.css";
import { useState } from "react";
import { url, options } from "../api.js" 

const SearchResults = ({results}) => {
    return <div className = "results-list">
        {
            results.map((result, id) => {
                return <div key= {id}>{result.label}</div>
            })
        }
    </div>
};

export default SearchResults;