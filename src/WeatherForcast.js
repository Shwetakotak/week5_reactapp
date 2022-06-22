import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css";
import axios from "axios";

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  console.log(props);
  if (loaded) {
    console.log(forecast);
    return (
      <div className="weatherForcast">
        <div className="row">
          <div className="col">
            <div className="weatherForcast-day">Tue</div>{" "}
            <WeatherIcon code="01d" size={36} />
            <div className="weatherForcast-temperatures">
              <span className="weatherForcast-temperature-max">33°</span>
              <span className="weatherForcast-temperature-min">18°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "861fb20b505f7e96a549db90c19a5142";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
