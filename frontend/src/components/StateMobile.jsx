import React, { useState } from "react";
import PropTypes from "prop-types";

export default function StateFilter({ handleStateFilter }) {
  const [selectedState, setSelectedState] = useState("");

  const stateOptions = [
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
        className="w-36 md:w-48 text-center rounded-md"
      >
        <option value="">Etat du mobile</option>
        {stateOptions.map((option) => (
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
