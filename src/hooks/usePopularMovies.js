import { useDispatch } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES } from "../utils/constants";
import { addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    fetch(POPULAR_MOVIES, API_OPTIONS)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        dispatch(addPopularMovies(json.results));
      })
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
