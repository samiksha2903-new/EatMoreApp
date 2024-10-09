import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./slices/CartSlice"
import SearchSlice from "./slices/SearchSlice"
import CategorySlice from "./slices/CategorySlice"

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        search: SearchSlice,
        category: CategorySlice,
    }
})