import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { PiCaretDoubleDown } from "react-icons/pi";
import { recursosObj } from "../recursosObj";
import "./Inicio.css";
import Navbar from "../Navbar/Navbar";
const Inicio = () => {
  return (
    <div className="text-white bg-gray-950 bg-gradient-personal">
      <div className="gradient-container"></div>
      <Navbar />
      <div className="relative overflow-hidden h-screen ">
        <div className="flex items-center justify-center h-full flex-col">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold relative mb-4 xs:m-2 xs:text-5xl">
              ¡Bienvenido a codEZ!
            </h1>
            <p className="text-gray-500 max-w-lg mx-auto mb-6 leading-relaxed xs:mx-2  xs:text-base font-medium">
              Recursos para simplificar el desarrollo en diseño y programación,
              haciendo que aprender y crear sean{" "}
              <mark class="px-2 text-white  rounded bg-violet-500">
                <b>Accesibles</b>
              </mark>{" "}
              y{" "}
              <mark class="px-2 text-white  rounded bg-violet-500">
                <b>Emocionantes</b>
              </mark>{" "}
            </p>
          </div>

          <PiCaretDoubleDown className="h-7 w-7 mt-7 animate-bounce" />
        </div>
      </div>

      <div className="h-screen xs:h-full xs:py-3">
        <section className="text-center">
          <div className="inline-block rounded-lg bg-gradient-to-r from-[#FF0080] to-[#9455d4] px-3 py-1 text-sm font-semibold">
            Recursos Destacados
          </div>
          <div className="font-bold text-4xl text-center mt-3 mb-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Aprender. Codear. Innovar.
            </h2>
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

      {/* <footer className="bg-gray-800 text-white p-4 text-center flex items-center justify-center flex-col">
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
