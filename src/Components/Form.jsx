import React, { useState } from "react";

const Form = ({ newLocation }) => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");

  const onCityChange = (e) => {
    setCity(e.target.value);
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!city) {
      return alert("Por favor ingrese una ciudad");
    }
    newLocation(city);
    // Aquí puedes realizar otras acciones, como enviar los datos a un servidor
  };
  return (
    <div className="container  mx-auto max-w-screen-xl justify-center p-2 bg-slate-600 py-2 px-6">
      <form onSubmit={onSubmit} className="text-center">
        <div className="flex flex-col sm:flex-row mb-3 ">
          <input
            type="text"
            className="w-full sm:w-60% px-4 py-2 border border-gray-300 rounded-md mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:border-blue-500"
            placeholder="ciudad"
            value={city}
            onChange={onCityChange}
          />
          <button
            className="flex-2 w-full sm:w-auto px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            type="submit"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

