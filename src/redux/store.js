import { configureStore } from "@reduxjs/toolkit";
import filter from './slices/filterSlice'
import book from './slices/bookSlice'

export const store = configureStore({
    reducer: {
        filter,
        book
    },
})