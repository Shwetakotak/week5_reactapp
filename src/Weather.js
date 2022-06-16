import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "861fb20b505f7e96a549db90c19a5142";
  let city = "New York";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="row mt-3">
        <div className="col-md-3">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly sunny"
            />
            <div className="float-left">
              <span className="temperature">22</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <ul id="details">
            <li>Precipitation: 1%</li>
            <li>Humidity: 67%</li>
            <li>Wind: 18 km/h</li>
          </ul>
        </div>
        <div className="col-md-6" style={{ textAlign: "right" }}>
          <h1>New York</h1>
          <ul>
            <li>Wednesday 6:00 PM</li>
            <li>Mostly sunny</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
