import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../providers/UserProvider";
import axios from "axios";
import ViewCard from "./ViewCard";
import Loading from "../loading/Loading";

import "./ViewsContainer.scss";

const API = process.env.REACT_APP_API_URL;

function ViewsContainer() {
  const [views, setViews] = useState([]);
  const [selectedBorough, setSelectedBorough] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const user = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    axios
    .get(`${API}/views`)
    .then((res) => {
      setViews(res.data.payload);
      setIsLoading(false);
    });
  }, []);

  let copyOfData = [...views];
  let filteredData = copyOfData.filter(
    (view) => view.location.toLowerCase() === selectedBorough.toLowerCase()
  );

  const handleChange = (e) => {
    setSelectedBorough(e.target.value);
  };

  if (selectedBorough === "") {
    filteredData = copyOfData;
  }

  return (
    <div>
      <div>
        <select onChange={handleChange}>
          <option value="">Select a Borough</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Queens">Queens</option>
          <option value="Bronx">Bronx</option>
          {/* <option value='staten-island'>Staten Island</option>   */}
        </select>
      </div>


      {isLoading ? <Loading/> : 
      <div className="viewsContainer">
        {filteredData.map((view) => (
          <ViewCard key={view.id} view={view} id={view.id} />
        ))}
      </div>
    }
    </div>
  );
}

export default ViewsContainer;
