import React from "react";
import { Link, useLocation } from "react-router-dom";
import { recursosObj } from "../recursosObj";

const NavRes = () => {
  const location = useLocation();

  return (
    <nav className="mt-5">
      <ul className="flex justify-center space-x-4 bg-black max-w-5xl mx-auto rounded-full border border-gray-900 py-2">
        {recursosObj.recursos.map((recurso) => (
          <Link to={recurso.link}>
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
