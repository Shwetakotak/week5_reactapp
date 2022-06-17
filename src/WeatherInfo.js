import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row mt-3">
        <div className="col-md-3">
          <div className="clearfix">
            <img src={props.data.iconUrl} alt={props.data.description} />
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperatue)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <ul id="details">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
        <div className="col-md-6" style={{ textAlign: "right" }}>
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />{" "}
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
