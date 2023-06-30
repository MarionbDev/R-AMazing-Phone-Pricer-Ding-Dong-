import { useState } from "react";
import { Modal } from "react-responsive-modal";
import RamMobileFilter from "../components/RamMobileFilter";
import StorageMobileFilter from "../components/StorageMobileFilter";
import NetworkFilter from "../components/NetworkMobileFilter copy";
import StateFilter from "../components/StateMobile";
import ScreenFilter from "../components/ScreenMobileFilter";

export default function PriceGenerator() {
  const [selectedRAM, setSelectedRAM] = useState(-1);
  const [selectedStorage, setSelectedStorage] = useState(-1);
  const [selectedState, setSelectedState] = useState("");
  const [isChecked, setIsChecked] = useState("");
  const [selectedScreen, setSelectedScreen] = useState("");
  const [showPrice, setShowPrice] = useState(false);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleRAMFilter = (selectedValue) => {
    setSelectedRAM(selectedValue);
  };

  const handleStorageFilter = (selectedValue) => {
    setSelectedStorage(selectedValue);
  };

  const handleStateFilter = (selectedValue) => {
    setSelectedState(selectedValue);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleScreenFilter = (selectedValue) => {
    setSelectedScreen(selectedValue);
  };

  const handleDingDongFilter = () => {
    setShowPrice(true);
  };

  let valeursRam = 0;
  switch (selectedRAM) {
    case 1:
      valeursRam = 30;
      break;
    case 2:
      valeursRam = 40;
      break;
    case 3:
      valeursRam = 54;
      break;
    case 4:
      valeursRam = 72;
      break;
    case 6:
      valeursRam = 108;
      break;
    case 8:
      valeursRam = 144;
      break;
    case 12:
      valeursRam = 216;
      break;
    default:
      valeursRam = 0;
  }

  let valeursStorage = 0;
  switch (selectedStorage) {
    case 16:
      valeursStorage = 31;
      break;
    case 32:
      valeursStorage = 45;
      break;
    case 64:
      valeursStorage = 66;
      break;
    case 128:
      valeursStorage = 132;
      break;
    case 256:
      valeursStorage = 264;
      break;
    case 512:
      valeursStorage = 528;
      break;
    case 1000:
      valeursStorage = 1031;
      break;
    default:
      valeursStorage = 0;
  }
  let valeursScreen = 0;
  switch (selectedScreen) {
    case 4:
      valeursScreen = 2;
      break;
    case 5:
      valeursScreen = 5;
      break;
    case 6:
      valeursScreen = 6;
      break;
    case 7:
      valeursScreen = 8;
      break;

    default:
      valeursScreen = 0;
  }

  const totalVal = valeursRam + valeursStorage + valeursScreen;

  let valeurCategory = "";
  if (selectedRAM !== -1 && selectedStorage !== -1 && selectedState !== "") {
    if (totalVal < 90) {
      valeurCategory = "1 - HC";
    } else if (totalVal >= 90 && totalVal < 165) {
      valeurCategory = "2 - C";
    } else if (totalVal >= 165 && totalVal < 255) {
      valeurCategory = "3 - B";
    } else if (totalVal >= 255 && totalVal < 375) {
      valeurCategory = "4 - A";
    } else {
      valeurCategory = "5 - Premium";
    }
  }

  let prixMobile = totalVal;

  if (valeurCategory === "1 - HC") {
    prixMobile += 0;
  } else if (valeurCategory === "2 - C") {
    prixMobile += 20;
  } else if (valeurCategory === "3 - B") {
    prixMobile += 40;
  } else if (valeurCategory === "4 - A") {
    prixMobile += 50;
  } else if (valeurCategory === "5 - Premium") {
    prixMobile += 60;
  }

  let valeursState = 0;
  switch (selectedState) {
    case "DEEE":
      valeursState = prixMobile - (prixMobile * 100) / 100;
      break;
    case "REPARABLE":
      valeursState = prixMobile - (prixMobile * 50) / 100;
      break;
    case "BLOQUE":
      valeursState = prixMobile - (prixMobile * 10) / 100;
      break;
    case "RECONDITIONNABLE":
      valeursState = prixMobile - (prixMobile * 5) / 100;
      break;
    case "RECONDITIONNE":
      valeursState = prixMobile - (prixMobile * 0) / 100;
      break;

    default:
      valeursState = 0;
  }
  const totalPrice = valeursState;

  return (
    <div className="flex mb-36 md:mb-0">
      <div className="flex justify-center m-auto">
        <div className="flex flex-col text-[14px] bg-[#D9D9D9] rounded-lg w-72 p-4  md:p-10 md:h-[28rem] md:w-96 md:text-[16px] ">
          <div className="flex flex-col   ">
            <div className="flex justify-between mb-4 md:mb-8">
              <p>Mémoire :</p>
              <RamMobileFilter handleRAMFilter={handleRAMFilter} />
            </div>
            <div className="flex justify-between mb-4 md:mb-8">
              <p>Stockage :</p>
              <StorageMobileFilter handleStorageFilter={handleStorageFilter} />
            </div>
            <div className="flex justify-between mb-4 md:mb-8">
              <p>Ecran</p>
              <ScreenFilter handleScreenFilter={handleScreenFilter} />
            </div>
            <div className="flex justify-between mb-4 md:mb-8">
              <p>Réseau :</p>
              <NetworkFilter />
            </div>
            <div>
              <div className="flex mb-4 md:mb-8">
                <label className=" md:m-0">
                  Chargeur et câble fournie ?
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCheckboxChange()}
                    className=" mx-4 md:mx-8"
                  />
                </label>
                <div>{isChecked ? "Oui" : "Non"}</div>
              </div>
            </div>
            <div className="flex justify-between mb-4 md:mb-8">
              <p>Etat : </p>
              <StateFilter handleStateFilter={handleStateFilter} />
            </div>
          </div>

          <div className="flex md:mt-6">
            <button
              type="button"
              onClick={() => {
                handleDingDongFilter();
                onOpenModal();
              }}
              className="bg-[#5F6280]  text-[#FFFFFF] rounded-sm px-3 py-2 md:px-6 md:py-3"
            >
              Ding Dong ?
            </button>
            <Modal
              open={open}
              onClose={onCloseModal}
              center
              classNames={{ overlay: "customOverlay", modal: "customModal" }}
              closeIcon={
                <span
                  style={{
                    fontSize: "20px",
                    width: "20px",
                    height: "20px",
                    color: "white",
                  }}
                >
                  X
                </span>
              }
            >
              <div className="p-2 text-base flex justify-center text-[#FFFFFF]  font-lightbold md:text-lg md:mt-1 md:py-0">
                {valeurCategory === "1 - HC" ? (
                  <h1>
                    Malheureusement le téléphone n'est pas éligible à la reprise
                    !!!
                  </h1>
                ) : (
                  <h1>Le téléphone est éligible à la reprise !!!</h1>
                )}
              </div>
            </Modal>
            <div className="flex items-center ml-5">
              <p className="mr-2">Prix :</p>
            </div>
            <div className="flex items-center w-[94px] text-center rounded-sm  bg-[#FFFF] md:px-6 md:py-">
              {showPrice && valeurCategory !== "1 - HC" && (
                <p className=" ">{Math.floor(totalPrice)} €</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
