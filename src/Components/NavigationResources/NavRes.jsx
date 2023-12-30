import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { recursosObj } from "../recursosObj";

const NavRes = () => {
  const location = useLocation();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <nav className="mt-5 relative">
      <div className="flex justify-center items-center min9:hidden">
        <button
          onClick={togglePopover}
          className="p-2 text-white focus:outline-none bg-black border border-gray-900 rounded-lg w-full max-w-36"
        >
          Recursos
        </button>
      </div>

      {isPopoverOpen && (
        <div className=" mt-1 min9:hidden absolute top-full left-1/2 transform -translate-x-1/2 bg-black max-w-6xl mx-auto rounded border border-gray-900 py-2  w-72 px-2">
          {recursosObj.recursos.map((recurso) => (
            <Link to={recurso.link} key={recurso.nombre}>
              <div
                onClick={() => setIsPopoverOpen(false)}
                className={`transition-colors duration-200 px-3 py-2 rounded-lg  flex items-center space-x-2 mb-1
                       ${
                         location.pathname === recurso.link
                           ? "bg-gray-100 text-black"
                           : "text-gray-500 hover:bg-gray-50 hover:text-black"
                       }`}
              >
                {recurso.icono}
                <span>{recurso.nombre}</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      <ul className="hidden md:flex justify-center space-x-4 md:space-x-0 bg-black max-w-5xl mx-auto rounded-full border border-gray-900 py-2 max9:hidden">
        {recursosObj.recursos.map((recurso) => (
          <Link to={recurso.link} key={recurso.nombre}>
            <li
              key={recurso.nombre}
              className={`transition-colors duration-200 px-3 py-2 rounded-lg  flex items-center space-x-2
                       ${
                         location.pathname === recurso.link
                           ? "bg-gray-100 text-black"
                           : "text-gray-500 hover:bg-gray-50 hover:text-black"
                       }`}
            >
              {recurso.icono}
              <span>{recurso.nombre}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavRes;
