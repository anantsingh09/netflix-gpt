import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";
import { BG_NETFLIX } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <img className="fixed -z-10" src={BG_NETFLIX} alt="logo"></img>
      <GptSearchBar />
      <GptSearchSuggestions />
    </div>
  );
};

export default GptSearch;
