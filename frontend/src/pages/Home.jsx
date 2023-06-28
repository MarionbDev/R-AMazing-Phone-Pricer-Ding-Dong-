import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@assets/Icons/Logo.svg";
import { useUserContext } from "../context/UserContext";
import style from "./Home.module.scss";

function LogIn() {
  const dispatch = useUserContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isSubmit] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("You must provide an email and a password!!!!");
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.warn(data);
          dispatch({ type: "SET_USER", payload: data });
          navigate(`/`);
        })
        .catch(() => {
          alert("Error to login, please try again!!!");
        });
    }
  };

  const renderForm = (
    <span>
      <h2 className="title"> Connexion </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChangeEmail}
          />
        </div>
        <div>
          <input
            type="password"
            name="pass"
            placeholder="Mot de passe"
            required
            onChange={handleChangePassword}
          />
        </div>
        <div>
          <button type="submit">Se connecter </button>
        </div>
      </form>
    </span>
  );
  return (
    <section className={style.form}>
      <div className={style.background}>
        <h1>Bienvenue</h1>
        <img src={Logo} alt="" />
        {renderForm}
      </div>
    </section>
  );
}

export default LogIn;
