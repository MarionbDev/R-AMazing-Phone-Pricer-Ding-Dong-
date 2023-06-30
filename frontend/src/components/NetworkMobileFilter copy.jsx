import React, { useState } from "react";

export default function NetworkFilter() {
  const [selectedNetwork, setSelectedNetwork] = useState("");

  const networkOptions = [2, 3, 4, 5];

  return (
    <div>
      <select
        value={selectedNetwork}
        onChange={(e) => setSelectedNetwork(e.target.value)}
        className="w-36 md:w-48 text-center rounded-md"
      >
        <option value="">Réseau du mobile</option>
        {networkOptions.map((option) => (
          <option key={option} value={option}>
            {option} G
          </option>
        ))}
      </select>
    </div>
  );
}
