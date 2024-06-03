import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createList } from '../utils/moviesSlice';

const CreateList = () => {
  const [newListName, setNewListName] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const dispatch = useDispatch();

  const handleCreateList = () => {
    if (newListName.trim() !== "") {
      dispatch(createList({ name: newListName, isPublic }));
      setNewListName("");
      setIsPublic(true);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center my-4 p-4 sm:p-12 bg-soft-gray">
      <h2 className="text-3xl font-bold font-mono mx-2">Create List:</h2> 
      <input 
        value={newListName}
        onChange={(e) => setNewListName(e.target.value)}
        className="outline-none border-2 rounded-md sm:px-4 sm:py-2 p-2 placeholder:text-gray-600"
        type="text"
        placeholder="New List Name"
      />
      <label className='border-2 px-6 py-2 my-2 text-2xl font-mono font-bold'>
        Public
        <input 
          className='mx-2 checked:'
          type="checkbox" 
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
        />
      </label>
      <button 
       onClick={handleCreateList}
       className='bg-purple-500 text-white p-2 rounded-md font-mono font-bold hover:bg-purple-200 hover:text-purple-500'
      >
        Create List
      </button>
    </div>
  );
};

export default CreateList;