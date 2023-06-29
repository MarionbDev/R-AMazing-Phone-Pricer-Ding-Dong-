/* eslint-disable import/no-duplicates */
import React, { useContext } from "react";
import Logo from "@assets/Icons/Logo.svg";
import UserContext from "../context/UserContext";
import style from "./Home.module.scss";

function Home() {
  const [{ user }] = useContext(UserContext);

  return (
    <section className={style.form}>
      <div className={style.background}>
        <h1>Bienvenue {user && `${user.name}`}</h1>
        <img src={Logo} alt="" />
      </div>
    </section>
  );
}

export default Home;
