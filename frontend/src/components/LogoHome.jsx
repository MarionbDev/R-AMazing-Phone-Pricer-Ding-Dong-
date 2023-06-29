import { Link } from "react-router-dom";
import logo from "../assets/ec-square-4.png";

export default function LogoHome() {
  return (
    <div className="absolute -top-5 right-0 visible md:invisible w-[5rem]">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-40 w-40 object-contain" />
      </Link>
    </div>
  );
}
