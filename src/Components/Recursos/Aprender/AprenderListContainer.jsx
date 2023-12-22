import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import AprenderList from "./AprenderList";
import LoadingInfo from "../Fonts/LoadingInfo";

const AprenderListContainer = () => {
  const [aprenderCol, setAprenderCol] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();
  useEffect(() => {
    const obtenerAprender = async () => {
      try {
        const q = query(
          collection(db, "Recursos"),
          where("categoria", "==", "aprender")
        );
        const queryContent = await getDocs(q);
        const data = queryContent.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAprenderCol(data);
        setLoading(false);
      } catch (error) {
        console.log("se ha producido un error", error);
      }
    };
    obtenerAprender();
  }, []);

  return (
    <section>
      <div></div>
      <div className="text-center font-bold text-white text-2xl mt-2">
        <h1>Explora la seccion Fuentes</h1>
      </div>
      {loading ? (
        <section className="md2:mx-3 sm:mx-3 md2:my-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-screen-xl mt-5 md2:place-content-center">
            {[1, 2, 3].map((key) => (
              <div
                key={key}
                className="bg-black bg-opacity-80 p-4 rounded-md shadow-md transition duration-300 ease-in-out overflow-hidden border border-gray-800 hover:border-violet-500 hover:shadow-lg hover:border-opacity-100 hover:bg-gray-900"
              >
                <LoadingInfo />
              </div>
            ))}
          </div>
        </section>
      ) : (
        <AprenderList aprender={aprenderCol} />
      )}
    </section>
  );
};

export default AprenderListContainer;
