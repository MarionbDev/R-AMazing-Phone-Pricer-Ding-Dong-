import { Link } from "react-router-dom";
import icon from "@assets/Icons/placeholderIcon.svg";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <ul>
        <li>
          <Link title="Accueil" to="/">
            <img src={icon} alt="Accueil" />
          </Link>
        </li>
        <li>
          <Link title="Calculateur" to="/calculateur">
            <img src={icon} alt="Calculateur" />
          </Link>
        </li>
        <li>
          <Link title="FAQ" to="/FAQ">
            <img src={icon} alt="FAQ" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
