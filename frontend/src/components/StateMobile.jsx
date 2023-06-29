import React, { useState } from "react";
import PropTypes from "prop-types";

export default function StateFilter({ handleStateFilter }) {
  const [selectedState, setSelectedState] = useState("");

  const ramOptions = [
    "DEEE",
    "REPARABLE",
    "BLOQUE",
    "RECONDITIONNABLE",
    "RECONDITIONNE",
  ];

  return (
    <div>
      <select
        value={selectedState}
        onChange={(e) => {
          const { value } = e.target;
          setSelectedState(value);
          handleStateFilter(value);
        }}
      >
        <option value="">Etat du téléphone</option>
        {ramOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

StateFilter.propTypes = {
  handleStateFilter: PropTypes.string.isRequired,
};
