import React, { useState } from "react";
import PropTypes from "prop-types";

export default function StorageMobileFilter({ handleStorageFilter }) {
  const [selectedStorage, setSelectedStorage] = useState("");

  const storageOptions = [16, 32, 64, 128, 256, 512, 1000];

  return (
    <div>
      <select
        value={selectedStorage.toString()}
        onChange={(e) => {
          const value = parseInt(e.target.value, 10);
          setSelectedStorage(value);
          handleStorageFilter(value);
        }}
        className="w-48 text-center rounded-md"
      >
        <option value="">Stockage du mobile</option>
        {storageOptions.map((option) => (
          <option key={option} value={option}>
            {option} Go
          </option>
        ))}
      </select>
    </div>
  );
}
StorageMobileFilter.propTypes = {
  handleStorageFilter: PropTypes.string.isRequired,
};
