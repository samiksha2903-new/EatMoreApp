import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name: "search",
    initialState: {
        search: "",
    },
    reducers: {
        searchItem: (state, action) => {
            if(action.payload !== "") state.search = (action.payload).toLowerCase();
            if(action.payload === "") state.search = "";
        }
    }
})

export const { searchItem } = searchSlice.actions

export default searchSlice.reducer;