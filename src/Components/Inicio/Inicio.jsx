import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { PiCaretDoubleDown } from "react-icons/pi";
import { recursosObj } from "../recursosObj";
const Inicio = () => {
  return (
    <div className="text-white bg-gray-950">
      <div className="relative overflow-hidden h-screen ">
        <div className="absolute w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 top-1/4 right-1/4"></div>
        <div className="absolute w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 top-1/4 left-1/4"></div>
        <div className="absolute w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 bottom-1/4 right-1/4"></div>
        <div className="absolute w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 bottom-1/4 left-1/4"></div>

        <div className="flex items-center justify-center h-full flex-col">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold relative z-10 mb-4 xs:m-2">
              ¡Bienvenido a codEZ!
            </h1>
            <p className="text-gray-500 max-w-lg mx-auto mb-6 leading-relaxed xs:mx-2">
              Una plataforma que proporciona recursos y herramientas para
              facilitar el desarrollo en diseño y programación. Nuestra misión
              es hacer que el aprendizaje y la creación sean más accesibles y
              emocionantes.
            </p>
          </div>

          <PiCaretDoubleDown className="h-7 w-7 mt-7 animate-bounce" />
        </div>
      </div>

      <div className="h-screen">
        <section className="xs:py-4">
          <div className="font-bold text-4xl text-center mt-3 mb-6">
            <h2>Explora los recursos disponibles</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-screen-lg xs:mx-3">
            <IconContext.Provider value={{ size: "3em" }}>
              {recursosObj.recursos.map((recurso, index) => (
                <Link
                  to={recurso.link}
                  key={index}
                  className="hover:border-blue-500 hover:shadow-lg transition duration-300 ease-in-out border border-gray-800 rounded-lg"
                >
                  <div className="bg-gray-900 p-4 rounded-lg shadow-md mb-4 cursor-pointer h-full hover:bg-slate-800 transition duration-300 ease-in-out">
                    <div className="flex items-center justify-center p-2">
                      {recurso.icono}
                    </div>
                    <h2 className="text-xl font-bold text-center">
                      {recurso.nombre}
                    </h2>
                  </div>
                </Link>
              ))}
            </IconContext.Provider>
          </div>
        </section>
      </div>

      {/* <footer className="bg-gray-800 text-white p-4 text-center flex items-center justify-center flex-col ">
        <p>&copy; 2023 codEZ. Todos los derechos reservados.</p>
        <p>
          Desarrollado por{" "}
          <a
            className="text-blue-400 underline hover:text-blue-500 transition duration-300 ease-in-out font-semibold"
            href="https://www.linkedin.com/in/mateo-bodini-46aa8828a/"
          >
            @MateoBodini
          </a>
        </p>
      </footer> */}
    </div>
  );
};

export default Inicio;
