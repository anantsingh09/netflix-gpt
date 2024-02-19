import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIES } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    fetch(NOW_PLAYING_MOVIES, API_OPTIONS)
      .then((res) => res.json())
      .then((json) => {
        dispatch(addNowPlayingMovies(json.results));
      })
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
