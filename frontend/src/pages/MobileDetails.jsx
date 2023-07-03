/* eslint-disable no-alert */
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PriceGenerator from "./PriceGenerator";

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
        .then(() => navigate("/"))
        .catch((err) => console.error(err));
    }
  };

  if (!mobile) {
    return <p>Loading the mobile...</p>;
  }

  return (
    <div className=" flex flex-col md:ml-[35%] ml-[10%] mt-[5%]">
      <div className="text-center mb-8 p-4 font-extrabold border-b-2 border-[#5f6280]">
        <h2 className="md:text-[18px]">{mobile.name}</h2>
        <p>
          Modèle : <span>{mobile.modele}</span>
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row ">
        <PriceGenerator />
        <div className="flex flex-col mb-8 md:mb-0 md:ml-16 w-[50%] mx-auto bg-white rounded-md justify-center ">
          {mobile.image && (
            <img
              className="rounded-t-md  w-[12rem] object-cover"
              src={
                /^(http|https)/.test(mobile.image)
                  ? mobile.image
                  : `${import.meta.env.VITE_ASSETS_URL}/mobiles/${mobile.image}`
              }
              alt={mobile.name}
            />
          )}
          <div className=" mt-2">
            <navigate
              className="invisible ml-[20%] bg-red-200 inline-block rounded-full shadow-xl md:visible md:px-6 md:py-2  hover:text-white hover:bg-red-400"
              type="button"
              onClick={deleteMobile}
            >
              Supprimer
            </navigate>
          </div>
        </div>
      </div>
    </div>
  );
}
