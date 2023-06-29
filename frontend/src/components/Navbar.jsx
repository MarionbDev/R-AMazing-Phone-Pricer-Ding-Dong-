import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ec-square-4.png";
import phoneAdd from "../assets/phone-svgrepo-com.svg";
import faqLogo from "../assets/telephone-svgrepo-com.svg";
import offLogo from "../assets/off-on-power-svgrepo-com.svg";

const Navbar = () => {
  return (
    <nav className="bg-[#5F6280] h-screen w-52 flex flex-col justify-between">
      <div className="flex flex-col items-center py-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-40 w-40 object-contain" />
        </Link>
      </div>
      <div className="flex flex-col absolute ml-[10.5rem] mt-4">
        <Link to="/FAQ">
          <img
            src={faqLogo}
            alt="Logo"
            className="w-16 h-16 bg-gray-200 rounded-full px-3 m-2"
          />
        </Link>

        <Link to="/addPhone">
          <img
            src={phoneAdd}
            alt="Logo"
            className="w-16 h-16 bg-gray-200 rounded-full  px-3 m-2"
          />
        </Link>

        <img
          src={offLogo}
          alt="Logo"
          className="w-16 h-16 bg-gray-200 rounded-full px-3 m-2"
        />
      </div>
      <div className="flex flex-col items-center mb-72">
        Filtres
        <div>Marque</div>
        <div>Modèle</div>
      </div>
    </nav>
  );
};

export default Navbar;
