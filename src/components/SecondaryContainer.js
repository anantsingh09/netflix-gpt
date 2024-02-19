import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black bg-opacity-95">
      <div className="pl-12 -mt-60 relative z-20 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
      {/*
    Movie list - popular
     - cards - movies * n
    Movie list - now playing
    Movie list - Trending
    
    
    */}
    </div>
  );
};

export default SecondaryContainer;
