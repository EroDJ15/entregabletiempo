import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";

const WeatherPanel = () => {
  let urlWeather = "https://api.openweathermap.org/data/2.5/weather?&appid=a09c6b737658ee4d2064ce178d619cc3&lang=es&units=metric";
  let urlCity = "&q=";
  let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?&appid=a09c6b737658ee4d2064ce178d619cc3&lang=es&units=metric";

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    // Llamar a la API para obtener el clima actual
    urlWeather = urlWeather + urlCity + loc;
    await fetch(urlWeather)
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((weatherData) => {
        console.log(weatherData);
        setWeather(weatherData);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });

    // Llamar a la API para obtener la predicción del clima
    urlForecast = urlForecast + urlCity + loc;
    await fetch(urlForecast)
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((forecastData) => {
        console.log(forecastData);
        setForecast(forecastData);
        setLoading(false);
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });
  };

  return (
    <React.Fragment>
      <Form newLocation={getLocation} />

      <Card

        showData={show}
        loadingData={loading}
        weather={weather}
        forecast={forecast}

      />

    </React.Fragment>
  );
};

export default WeatherPanel;


