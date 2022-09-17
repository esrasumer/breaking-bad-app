import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchCharacters = createAsyncThunk('characters/getCharacters',
    async () => {
        const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=13`);
        return res.data
    })

export const charactersSlice = createSlice({
    //store.js'e dahil edicez
    name: 'characters', //dosyanın ismi
    initialState: {
        items: [],
        isLoading: false,
    },
    reducers: {},
    extraReducers: {
        [fetchCharacters.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchCharacters.fulfilled]: (state, action) => {
            state.items = action.payload; // redux'ta gözükmesi için console.log yerine yazılır
            state.isLoading = false;
        },
        [fetchCharacters.rejected]: (state, action) => {
            state.error = action.error.message; // redux'ta gözükmesi için console.log yerine yazılır
            state.isLoading = false;
        },

    }
});

export default charactersSlice.reducer;