import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';

function Card({ showData, loadingData, weather, forecast }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('https://api.pexels.com/v1/search?query=clima', {
          headers: {
            Authorization: 'f46744s2pNMQrtti98twgXuQr0eg6wwe4yHihpbeIBWF2cPLJOdF2dvw',
          },
        });
        const data = await response.json();
        const photos = data.photos;
        if (photos && photos.length > 0) {
          const randomIndex = Math.floor(Math.random() * photos.length);
          const randomPhoto = photos[randomIndex];
          setImageUrl(randomPhoto.src.large);
        } else {
          setImageUrl('');
        }
      } catch (error) {
        console.error('Error al buscar las fotos:', error);
      }
    };

    fetchImage();
  }, []);

  const date = new Date();
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();

  var url = 'http://openweathermap.org/img/w';

  var iconUrl = weather && weather.weather && weather.weather.length > 0
    ? `${url}/${weather.weather[0].icon}.png`
    : '';

  var iconUrl3 = forecast && forecast.list && forecast.list.length > 1
    ? `${url}/${forecast.list[1].weather[0].icon}.png`
    : '';
  var iconUrl6 = forecast && forecast.list && forecast.list.length > 2
    ? `${url}/${forecast.list[2].weather[0].icon}.png`
    : '';
  var iconUrl9 = forecast && forecast.list && forecast.list.length > 3
    ? `${url}/${forecast.list[3].weather[0].icon}.png`
    : '';
  var iconUrl12 = forecast && forecast.list && forecast.list.length > 4
    ? `${url}/${forecast.list[4].weather[0].icon}.png`
    : '';

  var forecastDate3 = forecast && forecast.list && forecast.list.length > 1
    ? `${forecast.list[1].dt_txt.substring(8, 10)}/${forecast.list[1].dt_txt.substring(5, 7)}/${forecast.list[1].dt_txt.substring(0, 4)} ${forecast.list[1].dt_txt.substring(11, 13)}`
    : '';
  var forecastDate6 = forecast && forecast.list && forecast.list.length > 2
    ? `${forecast.list[2].dt_txt.substring(8, 10)}/${forecast.list[2].dt_txt.substring(5, 7)}/${forecast.list[2].dt_txt.substring(0, 4)} ${forecast.list[2].dt_txt.substring(11, 13)}`
    : '';
  var forecastDate9 = forecast && forecast.list && forecast.list.length > 3
    ? `${forecast.list[3].dt_txt.substring(8, 10)}/${forecast.list[3].dt_txt.substring(5, 7)}/${forecast.list[3].dt_txt.substring(0, 4)} ${forecast.list[3].dt_txt.substring(11, 13)}`
    : '';
  var forecastDate12 = forecast && forecast.list && forecast.list.length > 4
    ? `${forecast.list[4].dt_txt.substring(8, 10)}/${forecast.list[4].dt_txt.substring(5, 7)}/${forecast.list[4].dt_txt.substring(0, 4)} ${forecast.list[4].dt_txt.substring(11, 13)}`
    : '';

  return (
    <div className="mt-auto">
      {loadingData ? (
        <Spinner />
      ) : (
        showData === true ? (
          <div className="container mx-auto mt-1 p-2">
            <div className="card bg-black text-white md:flex p-1">
              <div className="md:w-screen">
                <img
                  src={imageUrl}
                  alt="clima"
                  className="rounded-start w-auto h-full"
                />
              </div>
              <div className="md:min-w-fit flex flex-col justify-center-mt-2">
                <div className="text-center mx-auto justify-center">
                  <h3 className="lg:text-2xl mt-10 border-t-3 font-bold p-7">{weather.name}</h3>
                  <p className="card-date">{dateString}</p>
                  <p className="card-time">{timeString}</p>
                  {iconUrl ? (
                    <img
                      src={iconUrl}
                      alt="icono"
                      className="w-14 h-14 mx-auto"
                    />
                  ) : (
                    <p>Error al cargar el icono del clima</p>
                  )}
                  <p className="text-xl">{weather.weather[0].description}</p>
                  <p className="text-sm text-gray-400">Temperatura: {weather.main.temp}°C</p>
                  <p className="text-sm text-gray-400">Sensación térmica: {weather.main.feels_like}°C</p>
                  <p className="text-sm text-gray-400">Humedad: {weather.main.humidity}%</p>
                  <p className="text-sm text-gray-400">Presión: {weather.main.pressure} hPa</p>
                  <p className="text-sm text-gray-400">Velocidad del viento: {weather.wind.speed} km/h</p>
                  <p className="text-sm text-gray-400">Dirección del viento: {weather.wind.deg}°</p>
                </div>
                <hr className="p-2 mt-5 mb-4" />
                <div className=' flex flex-wrap text-center justify-center text-xs -mt-3'>
                  <div className='flex flex-col items-center'>
                    <p>{forecastDate3}h</p>
                    <p className='flex grid-flow-row mx-8 description text-base'>{forecast.list[1].weather[0].description}</p>
                    <img src={iconUrl3} alt="" className="w-12 h-10 mx-auto" />
                    <p className='temp'>{forecast.list[1].main.temp}°C</p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <p>{forecastDate6}h</p>
                    <p className='flex grid-flow-row mx-8 description text-base'>{forecast.list[2].weather[0].description}</p>
                    <img src={iconUrl6} alt="" className="w-12 h-10 mx-auto" />
                    <p className='temp'>{forecast.list[2].main.temp}°C</p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <p>{forecastDate9}h</p>
                    <p className='flex grid-flow-row mx-8 description text-base'>{forecast.list[3].weather[0].description}</p>
                    <img src={iconUrl9} alt="" className="w-12 h-10 mx-auto" />
                    <p className='temp'>{forecast.list[3].main.temp}°C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h2></h2>
        )
      )}
    </div>
  );
}

export default Card;
