import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  doc,
  getDocs,
  collection,
  setDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const AgregarRecurso = () => {
  const navigate = useNavigate();
  const db = getFirestore();
  const [resource, setResource] = useState({
    titulo: "",
    descripcion: "",
    img: "",
    link: "",
    isFree: false,
  });

  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  // Obtener todas las categorías
  useEffect(() => {
    const obtenerCategorias = async () => {
      try {
        const resourcesCollection = collection(db, "Recursos");
        const resourcesSnapshot = await getDocs(resourcesCollection);

        // Obtener categorías únicas
        const categoriaUnica = new Set();
        resourcesSnapshot.forEach((doc) => {
          const resourceData = doc.data();
          if (resourceData.categoria) {
            categoriaUnica.add(resourceData.categoria);
          }
        });

        setCategories(Array.from(categoriaUnica));
      } catch (error) {
        console.error("Error al obtener las categorías:", error.message);
      }
    };

    obtenerCategorias();
  }, [db]);

  // Cargar nuevo recurso a la base de datos de firebase
  const manejoSubmit = async (e) => {
    e.preventDefault();
    // Desestructurar el objeto recurso para obtener sus propiedades y valores para poder enviarlos a la base de datos de firebase con setDoc
    const { titulo, descripcion, img, link, isFree } = resource;
    try {
      await setDoc(doc(db, "Recursos", titulo), {
        titulo,
        descripcion,
        img,
        link,
        categoria: selectedCategory,
        isFree,
      });

      console.log("Recurso agregado");
      // ir a la página de la categoria donde se ha agregado el producto
      navigate(`/${selectedCategory}`);
    } catch (error) {
      console.error("Error al agregar el recurso:", error.message);
    }
  };

  // Funciones de manejo de cambios
  const handleTitle = (e) => {
    setResource((prevResource) => ({
      ...prevResource,
      titulo: e.target.value,
    }));
  };

  const handleDescription = (e) => {
    setResource((prevResource) => ({
      ...prevResource,
      descripcion: e.target.value,
    }));
  };

  const handleImage = (e) => {
    setResource((prevResource) => ({
      ...prevResource,
      img: e.target.value,
    }));
  };

  const handleLink = (e) => {
    setResource((prevResource) => ({
      ...prevResource,
      link: e.target.value,
    }));
  };

  const handleFree = (e) => {
    setResource((prevResource) => ({
      ...prevResource,
      isFree: e.target.value === "true",
    }));
  };

  return (
    <div>
      <section className="flex justify-center items-center md:h-screen mm3:my-2 mm3:mx-3">
        <section className="flex justify-center ">
          <div className="flex flex-col items-center justify-center bg-slate-950 shadow-md rounded px-8 pt-6 pb-8 mb-4 xl2:mt-56">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              AGREGAR RECURSO
            </h2>
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 md:mb-0">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                    {" "}
                    Título del recurso{" "}
                  </label>
                  <input
                    className=" appearance-none block w-full bg-slate-900 text-white border border-slate-700 rounded py-3 px-4 mb-3 leading-tight"
                    type="text"
                    placeholder="Título del recurso"
                    onChange={handleTitle}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-3">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2 ">
                    Descripción
                  </label>
                  <textarea
                    className=" w-full h-full block bg-slate-900 text-white border border-slate-700 rounded py-3 px-4 mb-5 leading-tight"
                    type="text"
                    placeholder="Descripción"
                    onChange={handleDescription}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                    Imagen
                  </label>
                  <input
                    className="appearance-none block w-full bg-slate-900 text-white border border-slate-700 rounded py-3 px-4 leading-tight"
                    type="text"
                    placeholder="URL de la imagen"
                    onChange={handleImage}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                    Link
                  </label>
                  <input
                    className="block w-full bg-slate-900 text-white border border-slate-700 rounded py-3 px-4 mb-5 leading-tight"
                    type="text"
                    placeholder="Link del recurso"
                    onChange={handleLink}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                    Categoría
                  </label>
                  <select
                    className="appearance-none block w-full bg-slate-900 text-white border border-slate-700 rounded py-3 px-4 leading-tight"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="" disabled>
                      Selecciona una categoría
                    </option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                    Gratis
                  </label>
                  <select
                    className="block bg-slate-900 text-white border border-slate-700 rounded py-3 px-4 mb-5 leading-tight"
                    onChange={handleFree}
                    value={String(resource.isFree)}
                  >
                    <option value="true">Gratis</option>
                    <option value="false">De pago</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col -mx-3 mb-6">
                <button
                  className="mb-3 block text-center py-2 px-4 w-full rounded text-white bg-blue-600 hover:bg-blue-700"
                  onClick={manejoSubmit}
                >
                  Guardar
                </button>
                <Link to="/admin">
                  <button className="block text-center py-2 px-4 w-full rounded text-white bg-red-600 hover:bg-red-700">
                    Cancelar
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AgregarRecurso;
