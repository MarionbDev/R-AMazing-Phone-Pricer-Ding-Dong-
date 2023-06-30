import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoHome from "./LogoHome";

export default function AddPhone() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [modele, setModele] = useState("");
  const [image, setImage] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeModele = (e) => {
    setModele(e.target.value);
  };

  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !modele || !image) {
      alert("You must provide a name, a modele and a picture!!!!");
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mobiles`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          modele,
          image,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          navigate(`/mobiles/${data.id}`);
        })
        .catch(() => {
          alert("Error to create the mobile, please try again!!!");
        });
    }
  };

  return (
    <section className="flex flex-1 flex-col justify-evenly items-center text-white">
      <LogoHome />
      <h2 className="uppercase text-blue-950 tracking-tighter font-bold my-8 mx-auto text-xl w-[80%] md:w-[40%] md:ml-[35%]">
        Ajouter un nouveau mobile
      </h2>
      <form
        onSubmit={handleSubmit}
        // className="flex flex-1 flex-col justify-evenly items-center"
        className="shadow-md shadow-gray-400 bg-gray-200 border-2 border-gray-400 p-6 rounded-2xl  text-white md:w-[45%] w-[80%] m-auto flex flex-col justify-evenly items-center md:ml-[35%]"
      >
        <label
          htmlFor="name"
          className="text-blue-950 flex text-xl m-4 w-full items-center"
        >
          Marque :
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full w-[80%] shadow-md"
            type="text"
            id="name"
            required
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <label
          htmlFor="released"
          className="text-blue-950 flex text-xl m-4 w-full items-center"
        >
          Modèle :
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full w-[80%] shadow-md"
            type="text"
            id="modele"
            required
            value={modele}
            onChange={handleChangeModele}
          />
        </label>

        <label
          htmlFor="image"
          className="text-blue-950 flex text-xl m-4 w-full items-center"
        >
          Image:
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full w-[80%] shadow-md "
            type="url"
            id="image"
            required
            value={image}
            onChange={handleChangeImage}
          />
        </label>
        <button
          className="mx-4 bg-[#5F6280] inline-block rounded-full shadow-xl px-6 py-2 border-2  hover:text-white hover:border-2 hover:border-white"
          type="submit"
        >
          Ajouter le mobile
        </button>
      </form>
    </section>
  );
}
