import React, { useState } from "react";

export default function NetworkFilter() {
  const [selectedNetwork, setSelectedNetwork] = useState("");

  const ramOptions = [2, 3, 4, 5];

  return (
    <div>
      <select
        value={selectedNetwork}
        onChange={(e) => setSelectedNetwork(e.target.value)}
      >
        <option value="">Réseau du téléphone</option>
        {ramOptions.map((option) => (
          <option key={option} value={option}>
            {option} G
          </option>
        ))}
      </select>
    </div>
  );
}
