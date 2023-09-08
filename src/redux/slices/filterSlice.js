import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: null,
    categoryType: null,
    categoryName: null,
    sort: {
        name: 'Choose',
        sortType: null,
    },
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryType(state, action) {
            state.categoryType = action.payload
        },
        setCategoryName(state, action) {
            state.categoryName = action.payload
        },
        setSortType(state, action) {
            state.sort = action.payload
        },
        setFilters(state, action) {
            state.categoryType = action.payload.categoryType
            state.sort = action.payload.sort
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload
        },
    },
})

export const selectSort = (state) => state.filter

export const {setCategoryType, setCategoryName, setFilters, setSearchValue, setSortType} = filterSlice.actions

export default filterSlice.reducer