/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import logo from "../assets/ec-square-4.png";
import phoneAdd from "../assets/phone-svgrepo-com.svg";
import faqLogo from "../assets/telephone-svgrepo-com.svg";
import offLogo from "../assets/off-on-power-svgrepo-com.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useUserContext();
  const handleLogout = () => {
    dispatch({ type: "RESET_USER" });
    navigate("/login"); // Rediriger vers la page de connexion après la déconnexion
  };

  return (
    <nav className="bg-[#5F6280] fixed md:top-0 bottom-0 md:left-0 md:h-screen h-12 md:w-52 w-screen flex md:flex-col md:justify-between">
      <div className="md:flex md:flex-col md:items-center py-4 invisible md:visible">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-40 w-40 object-contain" />
        </Link>
      </div>
      <div className="flex md:flex-col absolute md:ml-[9.5rem] md:mt-4 -mt-14">
        <Link title="FAQ" to="/FAQ">
          <img
            src={faqLogo}
            alt="Logo"
            className="w-16 h-16 bg-gray-200 rounded-full px-3 m-6 "
          />
        </Link>

        <Link title="Ajouter un modèle" to="/AddPhone">
          <img
            src={phoneAdd}
            alt="Logo"
            className="w-16 h-16 bg-gray-200 rounded-full  px-3 m-6 md:mt-1"
          />
        </Link>
        <button type="button" onClick={handleLogout}>
          <img
            src={offLogo}
            alt="Logo"
            className="w-16 h-16 bg-gray-200 rounded-full px-3 m-6 md:mt-1"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
