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
          <div className="flex flex-col md:flex-row  md:ml-20  mt-8 mb-12 font-semibold">
            <label className="uppercase text-blue-950 tracking-tighter">
              Recherche par nom :
              <input
                className="mx-3 w-[50%] md:w-[40%] mb-5 shadow-xl rounded-md border-2 border-gray-300"
                type="text"
                value={searchQuery}
                onChange={handleSearchQueryChange}
              />
            </label>
            <label className="uppercase text-blue-950 tracking-tighter ">
              Recherche par modèle:
              <input
                className="ml-3 w-[50%] md:w-[40%] shadow-xl rounded-md border-2 border-gray-300"
                type="text"
                value={searchQuery2}
                onChange={handleSearchQuery2Change}
              />
            </label>
          </div>
        </div>
      </div>
      <div className=" mt-4 md:ml-48 mx-auto grid grid-cols-1 gap-9 md:grid-cols-2 w-[100%] md:w-[90%]">
        {filteredMobiles.map((mobile) => (
          <Mobile {...mobile} key={`mobile-${mobile.id}`} />
        ))}
      </div>
    </div>
  );
}
