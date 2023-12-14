import React from "react";

const Recursos = () => {
  // Dummy data para simular recursos
  const recursos = [
    { nombre: "Recurso 1", descripcion: "Descripción del recurso 1" },
    { nombre: "Recurso 2", descripcion: "Descripción del recurso 2" },
    { nombre: "Recurso 3", descripcion: "Descripción del recurso 3" },
    { nombre: "Recurso 4", descripcion: "Descripción del recurso 4" },
    // Agrega más recursos según sea necesario
  ];

  return (
    <div className=" text-white  flex flex-col items-center justify-center">
      <div className="font-bold text-2xl text-center mt-3 mb-6">
        <h1>Explora los recursos disponibles</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Mapea sobre los recursos y crea un cuadro para cada uno */}
        {recursos.map((recurso, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md w-full"
          >
            <h2 className="text-xl font-bold mb-2">{recurso.nombre}</h2>
            <p>{recurso.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recursos;
