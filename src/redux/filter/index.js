import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    dataCount: 8
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        loadMore: (state, action) => {
            state.dataCount += action.payload
        },

    }
})

export const {
    loadMore,
} = filterSlice.actions

export default filterSlice.reducer