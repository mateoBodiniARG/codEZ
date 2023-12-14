import React from "react";
import { Link } from "react-router-dom";
const Inicio = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-950 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4">¡Bienvenido a codEZ!</h1>
        <p className="text-gray-500 max-w-lg mx-auto mb-6 leading-relaxed">
          Una plataforma que proporciona recursos y herramientas para facilitar
          el desarrollo en diseño y programación. Nuestra misión es hacer que el
          aprendizaje y la creación sean más accesibles y emocionantes.
        </p>
        <Link to="/recursos">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            Comenzar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
