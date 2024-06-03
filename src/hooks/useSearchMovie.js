import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setMovie } from "../utils/moviesSlice";

const useSearchMovie = () => {
    const dispatch = useDispatch();
    const movieTitle = useSelector(store => store.movies.searchTerm);
    const API_KEY = import.meta.env.VITE_API_KEY

    const getSearchedMovie = async () => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=${API_KEY}`);
            const jsonData = await response.json();
            // console.log(jsonData);
            // console.log(jsonData.Response);
            if(jsonData.Response === "True") {
                dispatch(setMovie(jsonData));
            } else{
                dispatch(setMovie(jsonData));
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        if(movieTitle){
            getSearchedMovie();
        }        
    }, [movieTitle, dispatch]);
  
}

export default useSearchMovie;