import React from "react";
import NavRes from "../../NavigationResources/NavRes";
import { Link } from "react-router-dom";
const InspiracionList = ({ inspiraciones }) => {
  return (
    <section>
      <NavRes />
      <section className="md2:mx-3 sm:mx-3 md2:my-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-screen-xl mt-5 md2:place-content-center">
          {inspiraciones.map((inspiracion) => (
            <Link
              to={inspiracion.link}
              target="_blank"
              key={inspiracion.id}
              className="bg-black bg-opacity-80 p-4 rounded-md shadow-md transition duration-300 ease-in-out overflow-hidden border border-gray-800 hover:border-violet-500 hover:shadow-lg hover:border-opacity-100 hover:bg-gray-900"
            >
              <div className="flex justify-between items-center">
                <img
                  src={inspiracion.img}
                  alt=""
                  className="w-20 h-20 object-cover rounded-md mb-2"
                  loading="lazy"
                />
                <div>
                  <p
                    className={
                      inspiracion.free
                        ? "font-semibold bg-green-300 rounded-md px-1 text-green-900 mx-5"
                        : "font-semibold bg-red-300 rounded-md px-1 text-red-900 mx-5"
                    }
                  >
                    {inspiracion.free ? "Gratis" : "Pago"}
                  </p>
                </div>
              </div>

              <div className="mt-2">
                <h2 className="text-gray-300 mb-2 font-semibold">
                  {inspiracion.titulo}
                </h2>

                <p className="text-gray-300">{inspiracion.descripcion}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
};

export default InspiracionList;
