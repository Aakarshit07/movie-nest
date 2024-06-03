import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movie: null,
        lists: loadFromLocalStorage("movieLists") || [],
        searchTerm: '',
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setMovie: (state, action) => {
            state.movie = action.payload;
        },
        addMovieToList: (state, action) => {
            const { listId, movie } = action.payload;
            const list = state.lists.find(list => list.id === listId);
            if(list) {
                list.movies.push(movie);
                saveToLocalStorage("movieLists", state.lists);
            }
        },
        createList: (state, action) => {
            state.lists.push({
                id: new Date().toISOString(),
                name: action.payload.name,
                isPublic: action.payload.isPublic,
                movies: [],
            })
            saveToLocalStorage("movieLists", state.lists);
        },
        deleteList: (state, action) => {
            state.lists = state.lists.filter(list => list.id !== action.payload);
            saveToLocalStorage("movieLists", state.lists);
        } 
    }
});

export const { setSearchTerm, setMovie, addMovieToList, createList, deleteList } = moviesSlice.actions;
export default moviesSlice.reducer;