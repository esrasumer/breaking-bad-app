import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchCharacters = createAsyncThunk('characters/getCharacters',
    async () => {
        const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=10`);
        return res.data
    })

export const charactersSlice = createSlice({
    //store.js'e dahil edicez
    name: 'characters', //dosyanın ismi
    initialState: {
        items: [],
    },
    reducers: {},
    extraReducers: {
        [fetchCharacters.fulfilled]: (state, action) => {
            state.items = action.payload; // redux'ta gözükmesi için console.log yerine yazılır
        }
    }
});

export default charactersSlice.reducer;