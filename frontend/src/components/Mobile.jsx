import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Mobile({ id, name, modele, image }) {
  return (
    <Link to={`/mobiles/${id}`}>
      <div className="grid grid-cols-2 gap-4 shadow-md shadow-gray-400 bg-gray-200 border-2 border-gray-400 p-4 rounded-2xl  text-gray-500 ">
        <div>
          <h2 className="text-center mb-2 p-4 font-extrabold border-b-2 border-blue-950 text-blue-950 uppercase">
            {name}
          </h2>
          <p>
            Modèle: <span>{modele}</span>
          </p>
        </div>
        <div className="rounded-md p-2 h-30 bg-white">
          <img
            className=" h-30 object-cover"
            src={
              /^(http|https)/.test(image)
                ? image
                : `${import.meta.env.VITE_ASSETS_URL}/mobiles/${image}`
            }
            alt={name}
          />
        </div>
      </div>
    </Link>
  );
}

Mobile.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  modele: PropTypes.string.isRequired,
  image: PropTypes.string,
};

Mobile.defaultProps = {
  image:
    "https://www.cgspectrum.com/hs-fs/hubfs/CGSpectrum_November2019%20Theme/images/Grand-Theft-Auto-V-600x338.jpg?width=600&height=338&name=Grand-Theft-Auto-V-600x338.jpg",
};
