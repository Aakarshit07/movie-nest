import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieToList } from '../utils/moviesSlice';

const AddMovieToList = () => {
  const [selectedList, setSelectedList] = useState("");
  const dispatch = useDispatch();
  const movie = useSelector(store => store.movies.movie);
  const lists = useSelector(store => store.movies.lists);

  const handleAddMovieToList = (listId) => {
    if (movie) {
      dispatch(addMovieToList({ listId, movie }));
    }
  };

  return (
    movie && lists.length > 0 && (
      <div className="flex flex-warp justify-center items-center gap-4 my-6 bg-soft-beige p-4 sm:p-12">
        <h2 className="text-3xl font-bold font-mono mx-2">Add Movie to List:</h2>
        <select 
          className='p-2 sm:px-6 sm:py-4 rounded-md bg-white'
          value={selectedList}
          onChange={(e) => setSelectedList(e.target.value)}
        >
          <option value="">Select a List</option>
          {lists.map(list => (
            <option key={list.id} value={list.id}>{list.name}</option>
          ))}
        </select>
        <button
          className='bg-rose-500 text-white p-2 rounded-md font-mono font-bold hover:bg-rose-200 hover:text-rose-500'
          onClick={() => handleAddMovieToList(selectedList)}
        >
          Add Movie
        </button>
      </div>
    )
  );
};

export default AddMovieToList;