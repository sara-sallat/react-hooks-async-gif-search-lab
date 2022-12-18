import React, { useEffect, useState } from "react";

import GifList from "./GifList";
import GifSearch from "./GifSearch";

const GifListContainer = () => {
  const APIKEY = "idSAtbFURDVN0C43eetUc33jH7D3J3Vo";
  const BASE_URL = "https://api.giphy.com/v1/gifs";
  const TAIL_URL = "limit=3&rating=g";

  const [gifData, setGifData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getGifs = (searchQuery = "cat") => {
    fetch(`${BASE_URL}/search?q=${searchQuery}&api_key=${APIKEY}&${TAIL_URL}`)
      .then((req) => req.json())
      .then(
        (data) => {
          setGifData(data.data);
          setIsLoading(false);
        },
        (error) => {
          setError(error.message);
          setIsLoading(false);
        }
      );
  };

  useEffect(() => {
    getGifs();
  }, []);

  const handleGifSearchSubmit = (searchQuery) => {
    setIsLoading(true);
    getGifs(searchQuery);
  };

  return (
    <div className="row">
      {error ? (
        <h1 className="col-xs-6 text-center">{error}</h1>
      ) : isLoading ? (
        <h1 className="col-xs-6 text-center">Loading....</h1>
      ) : (
        <GifList list={gifData} />
      )}
      <GifSearch onGifSearchSubmit={handleGifSearchSubmit} />
    </div>
  );
};

export default GifListContainer;