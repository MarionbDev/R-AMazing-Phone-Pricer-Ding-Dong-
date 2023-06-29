import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import style from "@components/SignUp.module.scss";

const SignUp = ({ registering, setRegistering }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !mail || !password) {
      alert(
        "You must provide firstname, lastname, an email and a password!!!!"
      );
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          mail,
          password,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          setName("");
          setMail("");
          setPassword("");
          setRegistering(false);
          alert("Le compte a bien été créer");
          navigate(`/`);
        })
        .catch(() => {
          alert("Error to create your account, please try again!!!");
        });
    }
  };

  const renderForm = (
    <span>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nom"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Mail"
            required
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="pass"
            placeholder="Mot de passe"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={style.buttons}>
          <button type="submit"> Enregistrer </button>
          <button type="button" onClick={() => setRegistering(false)}>
            Annuler
          </button>
        </div>
      </form>
    </span>
  );

  return (
    <div
      className={style.form}
      style={{
        position: "absolute",
        right: registering ? "50%" : "-100%",
        transform: "translateX(50%)",
        transition: "500ms",
      }}
    >
      <div className={style.background}>{renderForm}</div>
    </div>
  );
};

export default SignUp;

SignUp.propTypes = {
  registering: PropTypes.bool.isRequired,
  setRegistering: PropTypes.func.isRequired,
};
