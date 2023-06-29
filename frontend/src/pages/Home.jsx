/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
import React, { useContext } from "react";
// import Logo from "@assets/Icons/Logo.svg";
import UserContext from "../context/UserContext";
// import style from "./Home.module.scss";
import MobileList from "./MobileList";
import LogoHome from "../components/LogoHome";

function Home() {
  const [{ user }] = useContext(UserContext);

  return (
    <section className=" w-[70%] mx-auto ">
      {" "}
      <h1 className="absolute mt-3 ml-[75%]">
        Bienvenue {user && `${user.name}`}
      </h1>
      <div>
        <LogoHome />
        <MobileList />
      </div>
    </section>
  );
}

export default Home;

// {
//   /* <div className={style.background}>
//         <h1>Bienvenue {user && `${user.name}`}</h1>
//         <img src={Logo} alt="" />
//       </div> */
// }
