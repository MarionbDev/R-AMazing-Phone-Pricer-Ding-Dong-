import React, { useState } from "react";
import PropTypes from "prop-types";

export default function ScreenFilter({ handleScreenFilter }) {
  const [selectedScreen, setSelectedScreen] = useState("");

  const screenOptions = [1, 2, 3, 4, 6, 8, 12, 16, 32];

  return (
    <div>
      <select
        value={selectedScreen.toString()}
        onChange={(e) => {
          const value = parseInt(e.target.value, 10);
          setSelectedScreen(value);
          handleScreenFilter(value);
        }}
        className="w-36 md:w-48 text-center rounded-md"
      >
        <option value="" className="">
          Taille de l'écran
        </option>
        {screenOptions.map((option) => (
          <option key={option} value={option}>
            {option} Pouces
          </option>
        ))}
      </select>
    </div>
  );
}

ScreenFilter.propTypes = {
  handleScreenFilter: PropTypes.string.isRequired,
};
