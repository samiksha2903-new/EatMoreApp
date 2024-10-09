import {createSlice} from "@reduxjs/toolkit" 

const CategorySlice = createSlice({
    name: "category",
    initialState: {
        category: "all",
    },
    reducers: {
        mealCategory: (state, action) => {
            state.category = action.payload
        }
    }
})

export const { mealCategory } = CategorySlice.actions;
export default CategorySlice.reducer;