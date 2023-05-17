import { createSlice } from "@reduxjs/toolkit";
import { productsList } from "../../data/products";


const initialState = {
    products: productsList
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getAllProducts: (state) => {
            return {...state, products: productsList}
        }
    }
})

export const {
    getAllProducts
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;