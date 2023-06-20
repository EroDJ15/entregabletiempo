import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

function WeatherForecast() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentCity, setCurrentCity] = useState('');
  const [searchCity, setSearchCity] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        const API_KEY = 'a09c6b737658ee4d2064ce178d619cc3';
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=es`;

        const response = await axios.get(URL);
        setWeatherInfo(response.data);
        setCurrentCity(response.data.name);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const handleSearch = async (city) => {
    try {
      const API_KEY = 'a09c6b737658ee4d2064ce178d619cc3';
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`;

      const response = await axios.get(URL);
      setWeatherInfo(response.data);
      setCurrentCity(response.data.name);
      setSearchCity('');
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container mx-auto mt-2 p-2 min-h-screen">
      <div className="card bg-black text-white md:flex p-1">
        <div className="md:w-1/2">
          <video
            src="/public/images/Seul.mp4"
            alt="clima"
            className="rounded-start w-auto h-full object-cover video-transition opacity-100 transition-opacity duration-600 ease-in-out hover:opacity-40"
            autoPlay
            muted
            loop
          />

        </div>
        <div className="md:w-1/2 flex flex-col justify-center -mt-3">
          <div className="text-center mx-auto">
            {currentCity && !searchCity ? (
              <>
                <h3 className="text-4xl mt-1 border-t-3 font-bold p-2">{currentCity}</h3>
                <p className="card-date">Fecha: {new Date().toLocaleDateString()}</p>
                <p className="card-time">Hora: {new Date().toLocaleTimeString()}</p>
                {weatherInfo && (
                  <>
                    <img
                      src={`http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`}
                      alt="icono"
                      className="w-14 h-14 mx-auto"
                    />
                    <p className="text-lg">{weatherInfo.weather[0].description}</p>
                    <p className="text-4xl mt-4 font-bold">{weatherInfo.main.temp}°C</p>
                  </>
                )}
              </>
            ) : (
              <div>
                <input
                  type="text"
                  placeholder="Buscar ciudad"
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                />
                <button onClick={() => handleSearch(searchCity)}>Buscar</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
