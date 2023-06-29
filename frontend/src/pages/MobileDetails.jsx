/* eslint-disable no-alert */
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MobileDetails() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState();

  const { id } = useParams();

  const getOneMobile = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mobiles/${id}`)
      .then((resp) => resp.json())
      .then((data) => setMobile(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOneMobile();
  }, [id]);

  const deleteMobile = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure to delete this mobile?")) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mobiles/${id}`, {
        method: "DELETE",
      })
        .then(() => navigate("/mobiles"))
        .catch((err) => console.error(err));
    }
  };

  if (!mobile) {
    return <p>Loading the mobile...</p>;
  }

  return (
    <figure className="bg-violet-900 p-4 rounded-2xl shadow-xl text-white max-w-6xl m-auto">
      {mobile.image && (
        <img
          className="rounded-t-md w-full object-cover"
          src={
            /^(http|https)/.test(mobile.image)
              ? mobile.image
              : `${import.meta.env.VITE_ASSETS_URL}/mobiles/${mobile.image}`
          }
          alt={mobile.name}
        />
      )}
      <figcaption>
        <h2 className="text-center mb-2 p-4 font-extrabold border-b-2 border-violet-400">
          {mobile.name}
        </h2>

        <p>
          Modèle : <span>{mobile.modele}</span>
        </p>
      </figcaption>
      <button
        className="bg-red-700 inline-block rounded-full shadow-xl px-6 py-2 hover:text-white hover:bg-red-500"
        type="button"
        onClick={deleteMobile}
      >
        Delete
      </button>
    </figure>
  );
}
