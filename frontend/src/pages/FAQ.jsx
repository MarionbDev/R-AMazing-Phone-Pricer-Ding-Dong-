import { useState } from "react";
import Arrow from "@assets/Icons/arrow.svg";
import LogoHome from "@components/LogoHome";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="md:flex">
      <LogoHome />
      <div className="min-h-screen p-10 md:ml-[18rem] md:w-[70vw]">
        <h2 className="flex justify-center mb-10 text-2xl uppercase text-blue-950 tracking-tighter font-bold">
          FAQ
        </h2>
        <div className="flex flex-col">
          <button
            type="button"
            onClick={() => toggleContent(0)}
            className="shadow-md shadow-gray-400 bg-gray-200 border-2 border-gray-400 focus:outline-none p-2 rounded-md mb-8  "
          >
            <div className="flex justify-between">
              <p className=" text-blue-950 flex text-xl  text-start">
                Comment trouver la version de mon smartphone ?
              </p>
              <img
                src={Arrow}
                alt="arrow"
                className="w-5 h-5 invisible md:visible"
              />
            </div>
            <div className={`${activeIndex === 0 ? "block" : "hidden"} mb-2 `}>
              <p className="mb-2 text-left">Pour Android :</p>
              <p className="mb-4 text-left ">
                Ouvrez l'application "Paramètres" sur votre smartphone. Faites
                défiler vers le bas et recherchez l'option "À propos du
                téléphone" ou "À propos de l'appareil". Cela peut varier en
                fonction de la version d'Android et de la surcouche logicielle
                utilisée par le fabricant. Appuyez sur "À propos du téléphone"
                ou une option similaire. Recherchez les informations concernant
                la version d'Android ou la version du système. Elle peut être
                affichée sous des noms tels que "Version Android", "Numéro de
                build" ou "Version logicielle".
              </p>

              <p className="mb-2 text-left">Pour iOS (iPhone) :</p>
              <p className="text-left">
                Ouvrez l'application "Réglages" sur votre iPhone. Faites défiler
                vers le bas et appuyez sur "Général". Sélectionnez
                "Informations" ou "À propos". Recherchez les informations
                concernant la version du logiciel. Vous verrez une entrée
                appelée "Version" ou "Numéro de version". Une fois que vous avez
                trouvé la version de votre smartphone, vous pouvez comparer
                cette information avec les dernières versions disponibles sur le
                marché pour déterminer si votre appareil est à jour ou s'il
                nécessite une mise à jour du système.
              </p>
            </div>
          </button>
          <button
            type="button"
            onClick={() => toggleContent(1)}
            className="shadow-md shadow-gray-400 bg-gray-200 border-2 border-gray-400 focus:outline-none p-2 rounded-md mb-8"
          >
            <div className="flex justify-between">
              <p className="  text-blue-950 flex text-xl text-start">
                Comment trouver la RAM et le stockage dans mon smartphone ?
              </p>
              <img
                src={Arrow}
                alt="arrow"
                className="w-5 h-5 invisible md:visible"
              />
            </div>
            <div
              className={`${activeIndex === 1 ? "block" : "hidden"}  md:mb-2 `}
            >
              <p className="mb-2 text-left">Pour Android : </p>
              <p className="mb-4 text-left">
                Ouvrez l'application "Paramètres" sur votre smartphone. Faites
                défiler vers le bas et recherchez l'option "À propos du
                téléphone" ou "À propos de l'appareil". Cela peut varier en
                fonction de la version d'Android et de la surcouche logicielle
                utilisée par le fabricant. Appuyez sur "À propos du téléphone"
                ou une option similaire. Recherchez les informations concernant
                la RAM et le stockage. Les informations relatives à la RAM
                peuvent être indiquées sous le nom "Mémoire" ou "Mémoire
                système", tandis que les informations relatives au stockage
                peuvent être indiquées sous le nom "Stockage interne",
                "Stockage" ou "Mémoire de l'appareil".
              </p>
              <p className="mb-2 text-left">Pour iOS (iPhone) :</p>
              <p className="text-left">
                Ouvrez l'application "Réglages" sur votre iPhone. Faites défiler
                vers le bas et appuyez sur "Général". Sélectionnez
                "Informations" ou "À propos". Recherchez les informations
                concernant la capacité de stockage et la mémoire. Sous l'entrée
                "Capacité", vous verrez la taille totale du stockage de votre
                appareil. Sous l'entrée "Disponible", vous verrez l'espace de
                stockage restant. Pour la RAM, il n'est pas possible d'accéder à
                cette information sur les appareils iOS sans utiliser des outils
                de diagnostic tiers.
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => toggleContent(3)}
            className="shadow-md shadow-gray-400 bg-gray-200 border-2 border-gray-400 focus:outline-none p-2 mb-8 rounded-md "
          >
            <div className="flex justify-between">
              <p className=" text-blue-950 flex text-xl text-start">
                Je ne trouve pas mon portable dans la liste, que faire ?
              </p>
              <img
                src={Arrow}
                alt="arrow"
                className="w-5 h-5 invisible md:visible"
              />
            </div>
            <div className={`${activeIndex === 3 ? "block" : "hidden"} mb-2 `}>
              <p className="text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </button>
          <button
            type="button"
            onClick={() => toggleContent(4)}
            className="shadow-md shadow-gray-400 bg-gray-200 border-2 border-gray-400 focus:outline-none p-2 mb-8 rounded-md"
          >
            <div className="flex  justify-between">
              <p className=" text-blue-950 flex text-xl text-start">
                Comment évaluer l'état général du téléphone ?
              </p>
              <img
                src={Arrow}
                alt="arrow"
                className="w-5 h-5 invisible md:visible"
              />
            </div>
            <div className={`${activeIndex === 4 ? "block" : "hidden"} mb-2 `}>
              <p className="text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
