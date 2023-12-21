import React from "react";
import codEZicon from "../../assets/codEZicon.png";
import { FaCircleInfo } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 px-7 py-6 border-b border-gray-800">
      <div className="flex justify-around items-center">
        <Link to="/">
          <Fade cascade down>
            <div className="flex items-center">
              <img src={codEZicon} alt="codEZ Icon" className="mr-2 w-11" />
              <div className="text-white font-bold text-xl">codEZ</div>
            </div>
          </Fade>
        </Link>
        <Fade cascade down>
          <div className="flex items-center">
            <FaCircleInfo className="w-5 h-5 " />
            <Link to={"/info"}>
              <p className="text-white mx-2 text-lg">Info</p>
            </Link>
          </div>
        </Fade>
      </div>
    </nav>
  );
};

export default Navbar;
