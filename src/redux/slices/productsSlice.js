import { createSlice } from "@reduxjs/toolkit";
import { productsList } from "../../data/products";
import { filterProductByCategory, searchProductByName } from "../../utils/filterProducts";


const initialState = {
    products: productsList
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getAllProducts: (state) => {
            return {...state, products: productsList}
        },
        filterCategory: (state, action) => {
            return {...state, products: filterProductByCategory(action.payload)}
        },
        searchProduct: (state, action) => {
            return {...state, products: searchProductByName(action.payload)}
        }
    }
})

export const {
    getAllProducts,
    filterCategory,
    searchProduct
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;