import { weatherUrl, weatherKey } from "../api.js";
import "./SearchResults.css";


const SearchResults = ({results, sendDataToParent, searchValue}) => {
    let [latitude, longitude] = [0, 0];

    const sendData = (data) => {
        // Sending some data to the parent
        sendDataToParent(data);
    }
    
    function redirect() {

        const currentWeather = fetch(`${weatherUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${weatherKey}`);
        const forecastWeather = fetch(`${weatherUrl}/forecast/?lat=${latitude}&lon=${longitude}&appid=${weatherKey}`);

        currentWeather.then((response) => response.json()).then((data) => {
            forecastWeather.then((response) => response.json()).then((data1) => {
                let allData = [data, data1];
                sendData(allData);
            });
        });
        
    }
    return <div className = "results-list">
        {searchValue &&
            results?.map((result, id) => {
                return <button className='buttons' key= {id} onClick = {() => {
                    [latitude, longitude] = result.value.split(",");
                    redirect();
                }}
                >{result.label}</button>
            })
        }
    </div>
};

export default SearchResults;