import React, { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import WeatherPanel from './Components/WeatherPanel';



const App = () => {


  return (
    <>
      <section className='bg-slate-600'>
        <NavBar />
        <WeatherPanel />
        <main className="bg-slate-600 min-h-screen text-white flex justify-center items-center font-principal-font p-1"></main>
      </section>
    </>
  );
};

export default App;


