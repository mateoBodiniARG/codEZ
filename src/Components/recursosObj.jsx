import React from "react";
import { FaRegStar } from "react-icons/fa";
import { SlGraduation } from "react-icons/sl";
import { GiInspiration } from "react-icons/gi";
import { RiRobot2Line } from "react-icons/ri";
import { RiFontSize } from "react-icons/ri";
import { BsPalette } from "react-icons/bs";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { TbPhotoSearch } from "react-icons/tb";

export const recursosObj = {
  recursos: [
    { nombre: "Iconos", icono: <FaRegStar />, link: "/iconos" },
    { nombre: "Aprender", icono: <SlGraduation />, link: "/aprender" },
    { nombre: "Inspiración", icono: <GiInspiration />, link: "/inspiracion" },
    { nombre: "Ai", icono: <RiRobot2Line />, link: "/ai" },
    { nombre: "Fuentes", icono: <RiFontSize />, link: "/fuentes" },
    { nombre: "Colores", icono: <BsPalette />, link: "/colores" },
    {
      nombre: "Ilustracion",
      icono: <HiOutlinePaintBrush />,
      link: "/ilustracion",
    },
    { nombre: "Fotos", icono: <TbPhotoSearch />, link: "/fotos" },
  ],
};
