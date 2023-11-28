import "./SearchResults.css";
import { useState, useEffect } from "react";
import { url, options } from "../api.js" 
import { weatherUrl, weatherKey } from "../api.js";
import MainPage from "./main-page/MainPage.js"

const SearchResults = ({results}) => {
    let [latitude, longitude] = [0, 0];
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    function redirect() {

        const currentWeather = fetch(`${weatherUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${weatherKey}`);
        const forecastWeather = fetch(`${weatherUrl}/forecast?lat=${latitude}&lon=${longitude}&appid=${weatherKey}`);

        // Promise.all([currentWeather, forecastWeather]) 
        //     .then(async (response) => {
        //         const weatherResponse = await response[0].json();
        //         const forecastResponse = await response[1].json();

        //         setWeather({weatherResponse});
        //         setForecast({forecastResponse});
        //     })

        currentWeather.then((response) => response.json()).then((data) => {
          console.log(data);
        });

        forecastWeather.then((response) => response.json()).then((data) => {
            console.log(data);
        });

        console.log(latitude);
        console.log(longitude);
        console.log(weather);
        console.log(forecast);
        
    }
    return <div className = "results-list">
        {
            results.map((result, id) => {
                return <button key= {id} onClick = {() => {
                    [latitude, longitude] = result.value.split(",");
                    redirect();
                }}
                >{result.label}</button>
            })
        }
    </div>
};

export default SearchResults;