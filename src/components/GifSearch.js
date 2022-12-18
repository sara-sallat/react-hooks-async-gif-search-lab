import React, { useState } from "react";

const GifSearch = ({ onGifSearchSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery === "") return;
    onGifSearchSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="col-xs-6 text-center">
      <label className="form-label">Enter a Search Term:</label>
      <input
        type="text"
        className="form-control"
        style={{ margin: "10px 0" }}
        value={searchQuery}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-success">
        Find Gifs
      </button>
    </form>
  );
};

export default GifSearch;