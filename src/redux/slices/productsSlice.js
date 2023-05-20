import { createSlice } from "@reduxjs/toolkit";
import { productsList } from "../../data/products";
import { filterProductByCategory, getProducts, searchProductByName, showLessProducts, showMoreProducts } from "../../utils/filterProducts";
import { TOTAL_PRODUCTS } from "../../utils/constants";


const initialState = {
    products: productsList,
    total: TOTAL_PRODUCTS,
    showBtns: true
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        showProducts: (state) => {
            return {...state, products: getProducts(state.total), showBtns: true}
        },
        filterCategory: (state, action) => {
            return {...state, products: filterProductByCategory(action.payload), showBtns: false}
        },
        searchProduct: (state, action) => {
            return {...state, products: searchProductByName(action.payload), showBtns: false}
        },
        showMore: (state) => {
            return {...state, total: showMoreProducts(state.total)}
        },
        showLess: (state) => {
            return {...state, total: showLessProducts(state.total)}
        }
    }
})

export const {
    showProducts,
    filterCategory,
    searchProduct,
    showMore,
    showLess,
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;