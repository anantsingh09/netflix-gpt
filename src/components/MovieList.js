import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  return (
    <div className="ml-3 bg-black bg-opacity-25">
      <h1 className="text-2xl py-1 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCards key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
