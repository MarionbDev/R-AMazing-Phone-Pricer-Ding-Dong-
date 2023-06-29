import { useState } from "react";
import { useNavigate } from "react-router-dom";

const imageTypes = ["image/jpeg", "image/jpg", "image/png"];

export default function AddPhone() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeModel = (e) => {
    setModel(e.target.value);
  };

  const handleChangeBackgroundImage = (e) => {
    // console.log(e);
    const fileSelected = e.target.files[0];

    if (imageTypes.includes(fileSelected.type)) {
      setBackgroundImage(e.target.files[0]);
    } else {
      alert("Only jpeg, jpg and png are allowed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !model || !backgroundImage) {
      alert("You must provide a name, a model date and a picture!!!!");
    } else {
      const gameData = new FormData();
      gameData.append("backgroundImage", backgroundImage);
      gameData.append("name", name);
      gameData.append("model", model);

      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mobile`, {
        method: "POST",
        credentials: "include",
        body: gameData,
      })
        .then((res) => res.json())
        .then((data) => {
          navigate(`/mobile/${data.id}`);
        })
        .catch(() => {
          alert("Error to create the mobile, please try again!!!");
        });
    }
  };

  return (
    <section className="flex flex-1 flex-col justify-evenly items-center text-white">
      <h2 className="text-blue-950 my-8 mx-auto text-4xl">
        Ajouter un nouveau mobile
      </h2>
      <form
        onSubmit={handleSubmit}
        // className="flex flex-1 flex-col justify-evenly items-center"
        className="bg-gray-200 p-6 rounded-2xl shadow-xl text-white max-w-6xl m-auto flex flex-col justify-evenly items-center"
      >
        <label
          htmlFor="name"
          className="text-blue-950 flex text-2xl m-4 w-full items-center"
        >
          Marque :
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
            type="text"
            id="name"
            required
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <label
          htmlFor="released"
          className="text-blue-950 flex text-2xl m-4 w-full items-center"
        >
          Modèle :
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
            type="text"
            id="model"
            required
            value={model}
            onChange={handleChangeModel}
          />
        </label>

        <label
          htmlFor="backgroundImage"
          className="text-blue-950 flex text-2xl m-4 w-full items-center"
        >
          Picture:
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
            type="link"
            id="backgroundImage"
            onChange={handleChangeBackgroundImage}
          />
        </label>
        <button
          className="mx-4 bg-[#5F6280] inline-block rounded-full shadow-xl px-6 py-2 border-2  hover:text-white hover:border-2 hover:border-white"
          type="submit"
        >
          Create the game
        </button>
      </form>
    </section>
  );
}
