import { useState } from "react";
import RamMobileFilter from "../components/RamMobileFilter";
import StorageMobileFilter from "../components/StorageMobileFilter";
import NetworkFilter from "../components/NetworkMobileFilter copy";
import StateFilter from "../components/StateMobile";

export default function PriceGenerator() {
  const [selectedRAM, setSelectedRAM] = useState(-1);
  const [selectedStorage, setSelectedStorage] = useState(-1);
  const [selectedState, setSelectedState] = useState("");
  const [isChecked, setIsChecked] = useState("");

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

  let valeursState = 0;
  switch (selectedState) {
    case "DEEE":
      valeursState = -100;
      break;
    case "REPARABLE":
      valeursState = -50;
      break;
    case "BLOQUE":
      valeursState = 0;
      break;
    case "CONDITIONNABLE":
      valeursState = 0;
      break;
    case "CONDITIONNE":
      valeursState = 0;
      break;

    default:
      valeursState = 0;
  }

  const totalVal = valeursRam + valeursStorage;

  // let valeurCategory = "";
  // if (selectedRAM !== -1 && selectedStorage !== -1 && selectedState !== "") {
  //   if (totalVal < 90) {
  //     valeurCategory = "1 - HC";
  //   } else if (totalVal >= 90 && totalVal < 165) {
  //     valeurCategory = "2 - C";
  //   } else if (totalVal >= 165 && totalVal < 255) {
  //     valeurCategory = "3 - B";
  //   } else if (totalVal >= 255 && totalVal < 375) {
  //     valeurCategory = "4 - A";
  //   } else {
  //     valeurCategory = "5 - Premium";
  //   }
  // }

  const prixMobile = totalVal + valeursState;

  return (
    <div>
      <RamMobileFilter handleRAMFilter={handleRAMFilter} />
      <StorageMobileFilter handleStorageFilter={handleStorageFilter} />
      <StateFilter handleStateFilter={handleStateFilter} />
      <NetworkFilter />
      <div>
        <label>
          Chargeur et câble fournie ?
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </label>
        <div>{isChecked ? "Oui" : "Non"}</div>
      </div>
      <div>
        {/* {smartphones.map((smartphone) => ( */}
        {/* <div key={smartphone.id}> */}

        <p>Prix : {prixMobile}</p>
      </div>
    </div>
  );
}
