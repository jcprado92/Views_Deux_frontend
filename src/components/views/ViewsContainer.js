import React, { useState, useEffect } from "react";
import axios from "axios";
import ViewCard from "./ViewCard";

import "./ViewsContainer.scss";

const API = process.env.REACT_APP_API_URL;

function ViewsContainer() {
  const [views, setViews] = useState([]);
  const [selectedBorough, setSelectedBorough] = useState("");

  useEffect(() => {
    axios.get(`${API}/views`).then((res) => {
      setViews(res.data.payload);
    });
  }, []);

  let copyOfData = [...views];
  let filteredData = copyOfData.filter(
    (view) => view.location.toLowerCase() === selectedBorough.toLowerCase()
  );

  const handleChange = (e) => {
    setSelectedBorough(e.target.value);
  };

  if (selectedBorough == "") {
    filteredData = copyOfData;
  }

  return (
    <div>
      <div>
        <select onChange={handleChange}>
          <option value="">Choose a Borough</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Queens">Queens</option>
          <option value="Bronx">Bronx</option>
          {/* <option value='staten-island'>Staten Island</option>   */}
        </select>
      </div>

      {}
      <div className="viewsContainer">
        {filteredData.map((view) => (
          <ViewCard key={view.id} view={view} id={view.id} />
        ))}
      </div>
    </div>
  );
}

export default ViewsContainer;
