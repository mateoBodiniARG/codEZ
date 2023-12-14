import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-4 h-screen">
      <div className="bg-violet-400 color p-3 rounded-md text-violet-950 font-semibold text-base">
        Lo sentimos, esa direccion no existe
      </div>
      <button className="mt-3">
        <a
          href="/"
          className="text-violet-400 font-semibold text-base hover:underline"
        >
          Volver al inicio
        </a>
      </button>
    </div>
  );
};

export default NotFound;
