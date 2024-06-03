import { useState } from "react";
import Header from "../components/Header";
import useSearchMovie from "../hooks/useSearchMovie";
import { browseHeroImage } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../utils/moviesSlice";
import MovieDisplay from "../components/MovieDisplay";
import CreateList from "../components/CreateList";
import AddMovieToList from "../components/AddMovieToList";
import UserLists from "../components/UserLists";
import Footer from "../components/Footer";

const Browse = () => {  
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  useSearchMovie();

  const handleMovieSearch = () => {
    dispatch(setSearchTerm(searchText));
  }

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center w-full h-96 overflow-hidden relative">
        <img className="w-full -z-10" src={browseHeroImage} alt="" />
        <div className="flex items-center justify-between gap-2 rounded-md shadow-lg hover:shadow-white/35 absolute border-4 border-red-500 font-mono bg-white w-1/2">
          <input 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="outline-none px-2 py-2 sm:py-4 placeholder:text-gray-600 w-[60%] sm:w-1/2"
            type="text" 
            placeholder="Search Movies..." 
          />
          <button 
            className="border-l-2 hover:bg-soft-gray px-2 py-2 sm:py-4 w-[40%] sm:w-1/4"
            onClick={handleMovieSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Movie Lists */}
      <div>
        <MovieDisplay />
        <CreateList />
        <AddMovieToList />
        <UserLists /> 
      </div>
      <Footer />
    </div>
  )
}

export default Browse;