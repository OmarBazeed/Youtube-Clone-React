import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = () => {
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="searchForm">
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="btn btn-light searchInput"
          value={searchTerm}
        />

        <button
          className="btn btn-danger searchBtn"
          style={{
            filter: "drop-shadow(2px 3px 4px black)",
          }}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </React.Fragment>
  );
}
