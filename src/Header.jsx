import { useState } from "react";
import axios from "axios";
import { ReactComponent as Arrow } from "./images/icon-arrow.svg";

const Header = ({ setData, setErr }) => {
  const [searchInput, setSearchInput] = useState("");

  const searchSubmit = async (e) => {
    e.preventDefault();
    //60f6c91d9c494b1eb9ad9c7b785c31e0
    await axios
      .get(
        `https://api.ipgeolocation.io/ipgeo?apiKey=60f6c91d9c494b1eb9ad9c7b785c31e0&ip=${searchInput}`
      )
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        setErr(true);
      });
  };
  return (
    <div className="header-container">
      <div className="search-container">
        <h1>IP Address Tracker</h1>
        <form onSubmit={(e) => searchSubmit(e)} action="">
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            placeholder="Search for any IP address"
          />
          <button type="submit">
            <Arrow />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
