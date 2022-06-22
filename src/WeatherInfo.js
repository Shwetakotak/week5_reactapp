import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row mt-3">
        <div className="col-md-3">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={36} />
            </div>
            <WeatherTemperature celsius={props.data.temperature} />
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
