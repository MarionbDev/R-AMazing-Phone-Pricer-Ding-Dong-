/* eslint-disable import/no-duplicates */
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "@components/SignUp";
import Logo from "@assets/Icons/Logo.svg";
import { useUserContext } from "../context/UserContext";
import UserContext from "../context/UserContext";
import style from "./Home.module.scss";

function LogIn() {
  const dispatch = useUserContext()[1];
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [registering, setRegistering] = useState(false);
  const [password, setPassword] = useState("");
  const [{ user }] = useContext(UserContext);

  const handleChangeEmail = (e) => {
    setMail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mail || !password) {
      alert("You must provide an email and a password!!!!");
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, {
        method: "POST",
        // credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail,
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
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Mail"
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
        <div className={style.buttons}>
          <button type="submit">Se connecter </button>
          <button type="button" onClick={() => setRegistering(true)}>
            S'enregistrer
          </button>
        </div>
      </form>
    </span>
  );
  return (
    <section className={style.form}>
      <SignUp registering={registering} setRegistering={setRegistering} />
      <div className={style.background}>
        <h1>Bienvenue {user && `${user.name}`}</h1>
        <img src={Logo} alt="" />
        {!user && renderForm}
      </div>
    </section>
  );
}

export default LogIn;
