import React, { useRef } from "react";
import lang from "../utils/languageContants.js";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi.js";
import { API_OPTIONS } from "../utils/constants.js";
import { addGptMovieSuggestions, addGptMovies } from "../utils/gptSlice.js";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    const queryResults =
      "Act as a Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      ". only give me name of 5 movies, comma separated like the example result given ahead. Exmaple Result: Gadar, Sholay,Don,Zindagi na milegi dobara, golmal, koi mill gya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: queryResults }],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = gptResults?.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    console.log(
      tmdbResults.map((tmdbmovie) =>
        tmdbmovie.filter((movie) => movie.original_language === "hi")
      )
    );

    dispatch(
      addGptMovies({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[15%] flex justify-center ">
      <form
        className="w-1/2 bg-black  grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button
          className="m-4 p-2 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
