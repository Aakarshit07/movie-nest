import { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieDetails from './MovieDetails';

const MovieDisplay = () => {
  const [showInfo, setShowInfo] = useState(false);
  
  const movie = useSelector(store => store.movies.movie);
  
  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  }  
  
  return (
    movie && (
      <div className="flex flex-wrap justify-center items-center my-4 w-full bg-[url('http://i.imgur.com/Cx7oeRz.jpg')] p-4 text-white">
        <div className='flex flex-col justify-center items-center sm:w-1/2 md:1/3 p-4 border-8 border-fuchsia-500 bg-black rounded-md'>
            <img className='border-4 border-amber-500 sm:w-9/12 md:w-1/2 h-72 rounded-sm' src={movie?.Poster} alt={movie?.Title} />
            <div className='sm:w-9/12 my-8 text-ellipsis text-wrap overflow-hidden'>
                <h2 className='text-3xl font-bold font-mono'>{movie?.Title}</h2>
                <p className='my-2'>Ratings: ⭐ {movie && movie?.imdbRating}</p>
                <p className=''>{movie?.Plot}</p>
            </div>
            <button onClick={handleInfoClick} className='bg-red-500 hover:bg-red-200 hover:text-red-500 text-white p-2 rounded font-mono font-bold'>More Info</button>
            
        </div>
        {showInfo && 
          <MovieDetails movie={movie}/>
        }
      </div>
    )
  );
};

export default MovieDisplay;