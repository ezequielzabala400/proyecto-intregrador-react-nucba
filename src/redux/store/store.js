import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { toggleMenuReducer } from "../slices/toggleMenuSlice";
import { productsReducer } from "../slices/productsSlice";

const reducers = combineReducers({
    toggleMenu: toggleMenuReducer,
    products: productsReducer
})

export const store = configureStore({
    reducer: reducers
})