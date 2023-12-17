import React from "react";
import { Link } from "react-router-dom";

const FontsList = ({ fonts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-screen-xl mt-5 md2:place-items-center">
      {fonts.map((font) => (
        <Link
          to={font.link}
          target="_blank"
          key={font.id}
          className="bg-black bg-opacity-80 p-4 rounded-md shadow-md transition duration-300 ease-in-out overflow-hidden border border-gray-800 hover:border-violet-500 hover:shadow-lg hover:border-opacity-100 hover:bg-gray-900"
        >
          <div className="">
            <img
              src={font.img}
              alt=""
              className="w-20 h-20 object-cover rounded-md mb-2"
            />
            <p>{font.free}</p>
          </div>

          <div className="mt-2">
            <h2 className="text-gray-300 mb-2 font-semibold">{font.titulo}</h2>
            <p className="text-gray-300">{font.descripcion}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FontsList;
