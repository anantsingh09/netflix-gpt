import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    fetch(UPCOMING_MOVIES, API_OPTIONS)
      .then((res) => res.json())
      .then((json) => {
        dispatch(addUpcomingMovies(json.results));
      })
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
