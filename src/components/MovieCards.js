import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-2">
      <img alt="Movie card" src={IMG_CDN_URL + posterPath}></img>
    </div>
  );
};

export default MovieCards;
