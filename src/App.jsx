import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import WeatherPanel from "./Components/WeatherPanel";
import "./index.css";
import WeatherForecast from "./Components/WeatherForecast";

const App = () => {
  const [showWeatherForecast, setShowWeatherForecast] = useState(true);

  // Función para ocultar el componente WeatherForecast
  const hideWeatherForecast = () => {
    setShowWeatherForecast(false);
  };

  return (
    <>
      <section className='bg-slate-600'>
        <NavBar />
        <WeatherPanel hideWeatherForecast={hideWeatherForecast} />
        {showWeatherForecast && <WeatherForecast />}
        <main className="bg-slate-600 min-h-fit text-white flex justify-center items-center font-principal-font p-4"></main>
      </section>
    </>
  );
};

export default App;



