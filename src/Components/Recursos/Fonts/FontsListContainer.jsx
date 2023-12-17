import { useEffect, useState } from "react";
import React from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import FontsList from "./FontsList";

const FontsListContainer = () => {
  const [fontsCol, setFontsCol] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const obtenerFonts = async () => {
      try {
        const q = query(
          collection(db, "Recursos"),
          where("categoria", "==", "fuentes")
        );
        const queryContent = await getDocs(q);
        console.log(queryContent);
        const data = queryContent.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFontsCol(data);
        console.log(data);
      } catch (error) {
        console.log("se ha producido un error", error);
      }
    };
    obtenerFonts();
  }, [db]);

  return (
    <section>
      <div className="text-center font-bold text-white text-2xl mt-2">
        <h1>Fuentes</h1>
      </div>
      <FontsList fonts={fontsCol} />
    </section>
  );
};

export default FontsListContainer;
