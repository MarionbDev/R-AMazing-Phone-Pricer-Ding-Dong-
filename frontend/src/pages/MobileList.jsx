import React, { useState, useEffect } from "react";
import Mobile from "@components/Mobile";

export default function MobileList() {
  const [mobiles, setMobiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQuery2, setSearchQuery2] = useState("");

  const getAllMobiles = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mobiles`)
      .then((resp) => resp.json())
      .then((data) => setMobiles(data));
  };

  useEffect(() => {
    getAllMobiles();
  }, []);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchQuery2Change = (e) => {
    setSearchQuery2(e.target.value);
  };

  const filteredMobiles = mobiles.filter((mobile) => {
    const matchesSearchQuery = mobile.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesSearchQuery2 = mobile.modele
      .toLowerCase()
      .includes(searchQuery2.toLowerCase());

    return matchesSearchQuery && matchesSearchQuery2;
  });

  return (
    <div>
      <div>
        <div>
          <h2 className="mt-6 ml-20 mr-10">Filtrer les mobiles</h2>
          <div className="ml-20">
            <label>
              Recherche par nom:
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchQueryChange}
              />
            </label>
            <label>
              Recherche par modèle:
              <input
                type="text"
                value={searchQuery2}
                onChange={handleSearchQuery2Change}
              />
            </label>
          </div>
        </div>
      </div>
      <div className=" mt-4 ml-48 grid grid-cols-1 gap-9 md:grid-cols-2 ">
        {filteredMobiles.map((mobile) => (
          <Mobile {...mobile} key={`mobile-${mobile.id}`} />
        ))}
      </div>
    </div>
  );
}
