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
        <main className="bg-slate-600 min-h-min  text-white flex justify-center items-center font-principal-font p-1"></main>
        <footer className='flex flex-col items-center mt-auto py-4 bg-primary dark:text-cyan-50 '>
          <p className="dark:text-cyan-50 text-xs font-semibold text-center">
            &copy; 2023 Todos los derechos reservados
          </p>
          <a
            href="https://github.com/EroDJ15"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-cyan-50 text-xs font-semibold flex items-center p-2 py-2"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/github.png"
              alt="github"
              className="w-4 h-4 dark:text-cyan-50"
            />
            Created by: Jerovic Pino
          </a>
        </footer>
      </section>
    </>
  );
};

export default App;



