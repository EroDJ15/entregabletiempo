import React from 'react'
import Spinner from './Spinner'

function Card({ showData, loadingData, weather, forecast }) {
  const date = new Date();
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();

  var url = ''
  var iconUrl = ''

  var iconUrl3 = ''
  var iconUrl6 = ''
  var iconUrl9 = ''
  var iconUrl12 = ''

  var forecastDate3 = ''
  var forecastDate6 = ''
  var forecastDate9 = ''
  var forecastDate12 = ''

  if (showData) {
    url = 'http://openweathermap.org/img/w'
    iconUrl = url + weather.weather[0].icon + '.png'

    iconUrl12 = `${url + forecast.list[1].weather[0].con}.png`
    iconUrl12 = `${url + forecast.list[2].weather[0].con}.png`
    iconUrl12 = `${url + forecast.list[3].weather[0].con}.png`
    iconUrl12 = `${url + forecast.list[4].weather[0].con}.png`

    forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/ ' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
    forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/ ' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
    forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/ ' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
    forecastDate12 = forecast.list[4].dt_txt.substring(8, 10) + '/' + forecast.list[4].dt_txt.substring(5, 7) + '/ ' + forecast.list[4].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
  }

  return (
    <div className="mt-1">
      {showData === true ? (
        <div className="container mx-auto">
          <div className="card bg-black text-white md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/1525612/pexels-photo-1525612.jpeg"
                alt="clima"
                className="rounded-start w-full"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center mt-flex py-6">
              <div className="text-center mx-auto">
                <h3 className="text-4xl font-bold">{weather.name}</h3>
                <p className="card-date">{dateString}</p>
                <p className="card-time">{timeString}</p>
                <img
                  src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                  alt="icono"
                  className="w-14 h-14 mx-auto"
                />

                <p className="text-lg">{weather.weather[0].description}</p>
                <p className="text-sm text-gray-400">Temperatura: {weather.main.temp}°C</p>
                <p className="text-sm text-gray-400">Sensación térmica: {weather.main.feels_like}°C</p>
                <p className="text-sm text-gray-400">Humedad: {weather.main.humidity}%</p>
                <p className="text-sm text-gray-400">Presión: {weather.main.pressure} hPa</p>
              </div>
              <hr className="p-2 mt-4 mb-6" />
              <div className='flex text-center justify-between justify-items-center text-xs -mt-5'>
                <div className='flex flex-col items-center'>
                  <p>{forecastDate3}h</p>
                  <p className='flex grid-flow-row mx-8 description text-base'><img src={iconUrl3} alt="" />{forecast.list[1].weather[0].description}</p>
                  <p className='temp'>{(forecast.list[1].main.temp)}°C</p>
                </div>
                <div className='flex flex-col items-center'>
                  <p>{forecastDate6}h</p>
                  <p className='flex grid-flow-row mx-8 description text-base'><img src={iconUrl6} alt="" />{forecast.list[2].weather[0].description}</p>
                  <p className='temp'>{(forecast.list[2].main.temp)}°C</p>
                </div>
                <div className='flex flex-col items-center'>
                  <p>{forecastDate9}h</p>
                  <p className='flex grid-flow-row mx-8 description text-base'><img src={iconUrl9} alt="" />{forecast.list[3].weather[0].description}</p>
                  <p className='temp'>{(forecast.list[3].main.temp)}°C</p>
                </div>



              </div>

            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-white text-center text-3xl">Sin Datos</h2>
      )}
    </div>
  )
}

export default Card;
