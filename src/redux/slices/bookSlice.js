import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
    'book/fetchBooksStatus',
    async ({ search, sort, category }) => {
       try {
        if (search) {
            const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}$filter=${category}:keyes&key=AIzaSyCofyowVkZn1BA1uPW5AkAeqBMkz51CQJM`)
            return data.items
        } else {
            return []
        }
       
       } catch(error) {
        throw error
       }
    }
)

const initialState = {
    items: [],
    status: 'loading'
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
            state.items = []
        },
    },
    extraReducers: {
        [fetchBooks.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchBooks.fulfilled]: (state, action) => {
            state.items= action.payload
            state.status = 'sucsess'
        },
        [fetchBooks.rejected]: (state) => {
            state.status = 'error';
            state.items = []
        }
    }
})

export const selectedBook = (state) => state.book
export const {setItems} = bookSlice.actions
export default bookSlice.reducer