const MovieDetails = ({ movie }) => {
  return (
    <div className='bg-white text-black p-4 rounded-md m-4 shadow-lg border-8 border-amber-300 w-full sm:w-1/2 md:w-1/3'>
      <h2 className='text-3xl font-bold font-mono'>{movie?.Title}</h2>
      <p className='my-2 text-xl'>Ratings: {movie?.Ratings[0]?.Value} ⭐</p>
      <p className='my-2'>{movie?.Plot}</p>
      <p className='my-2'><strong>Actors:</strong> {movie?.Actors}</p>
      <p className='my-2'><strong>Director:</strong> {movie?.Director}</p>
      <p className='my-2'><strong>Language:</strong> {movie?.Language}</p>
      <p className='my-2'><strong>Genre:</strong> {movie?.Genre}</p>
      <p className='my-2'><strong>Awards:</strong> {movie?.Awards}</p>
      <p className='my-2'><strong>Released:</strong> {movie?.Released}</p>
      <p className='my-2'><strong>Runtime:</strong> {movie?.Runtime}</p>
      <p className='my-2'><strong>Rated:</strong> {movie?.Rated}</p>
      <p className='my-2'><strong>BoxOffice:</strong> {movie?.BoxOffice}</p>
    </div>
  );
};

export default MovieDetails;
