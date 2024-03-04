import { useDispatch, useSelector } from "react-redux";
import {
  API_OPTIONS,
  POPULAR_MOVIES,
  TOP_RATED_MOVIES,
} from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    fetch(TOP_RATED_MOVIES, API_OPTIONS)
      .then((res) => res.json())
      .then((json) => {
        dispatch(addTopRatedMovies(json.results));
      })
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
