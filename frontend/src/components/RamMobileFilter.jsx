import React, { useState } from "react";
import PropTypes from "prop-types";

export default function RamFilter({ handleRAMFilter }) {
  const [selectedRAM, setSelectedRAM] = useState("");

  const ramOptions = [1, 2, 3, 4, 6, 8, 12, 16, 32];

  return (
    <div>
      <select
        value={selectedRAM.toString()}
        onChange={(e) => {
          const value = parseInt(e.target.value, 10);
          setSelectedRAM(value);
          handleRAMFilter(value);
        }}
      >
        <option value="">RAM du mobile</option>
        {ramOptions.map((option) => (
          <option key={option} value={option}>
            {option} Go
          </option>
        ))}
      </select>
    </div>
  );
}

RamFilter.propTypes = {
  handleRAMFilter: PropTypes.string.isRequired,
};
