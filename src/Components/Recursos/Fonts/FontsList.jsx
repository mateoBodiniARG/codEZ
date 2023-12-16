import React from "react";
import { Link } from "react-router-dom";

const FontsList = ({ fonts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-screen-xl">
      {fonts.map((font) => (
        <Link
          to={font.link}
          target="_blank"
          key={font.id}
          className="bg-black bg-opacity-80 p-6 rounded-md shadow-md transition duration-300 ease-in-out overflow-hidden border border-gray-800 hover:border-violet-500 hover:shadow-lg hover:border-opacity-100"
        >
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              {font.titulo}
            </h2>
            <p className="text-gray-300 mb-4">{font.descripcion}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FontsList;
