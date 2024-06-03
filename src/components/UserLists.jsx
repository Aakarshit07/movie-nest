import { useDispatch, useSelector } from 'react-redux';
import { deleteList } from '../utils/moviesSlice';
import { useState } from 'react';

const UserLists = () => {
  const [showInfo, setShowInfo] = useState(false);
  
  const lists = useSelector(store => store.movies.lists);
  const dispatch = useDispatch();
  
  const handleDeleteList = (listId) => {
    dispatch(deleteList(listId));
  }

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  }

  
  return (
    <div className="my-6 bg-soft-beige p-6">
      <h2 className='text-4xl font-bold font-mono py-4 mx-2 text-center sm:text-left'>Your Lists:</h2>
      {lists.map(list => (
        <div key={`${list?.id}-${new Date().toISOString}`} className="mb-4 flex flex-col items-stretch gap-8 rounded-sm">
          <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center p-2'>
            <h3 className='text-3xl font-bold font-mono text-gray-700'>{list?.name} {list.isPublic ? "(Public)" : "(Private)"}</h3>
            <button onClick={() => handleDeleteList(list.id)} className="bg-red-500 hover:bg-red-200 hover:text-red-500 text-white px-2 py-1 rounded font-mono font-bold">Delete</button>
          </div>
          <div className='flex gap-4 overflow-x-auto scroll-smooth no-scrollbar p-2 w-full'>
            {list.movies.map(movie => (
              <article key={movie?.imdbID} className="flex-none rounded-xl bg-white p-3 shadow-lg hover:shadow-xl border-4 border-orange-200 m-2" style={{ width: '200px' }}>
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img className='w-full h-56' src={movie?.Poster} alt={movie?.Title} />
                  <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-slate-400 ml-1 text-sm">{movie?.imdbRating}</span>
                  </div>
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-slate-700 font-semibold">{movie?.Title}</h2>
                  <p className="text-slate-400 m-1 text-sm">{movie?.Year}</p>
                  <button onClick={handleInfoClick} className="text-gray-500 rounded-full cursor-pointer">
                    ℹ️
                  </button>
                  {showInfo && <div className='w-full mt-2 font-mono font-bolds text-sm'>For deatils search movies...</div>}
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}  
    </div>
  );
};

export default UserLists;
