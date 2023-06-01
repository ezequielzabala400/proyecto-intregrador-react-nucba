import { createSlice, current } from "@reduxjs/toolkit"
import { addProductToCart, addQuantity, removeProductFromCart, substractQuantity, totalPrice } from "../../utils/productsCartUtils"


const initialState = {
    cartItems: [],
    total: 0,
    cartHidden: true
}



const cartProductSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        showCart: (state) => {
            return {
                ...state,
                cartHidden: !state.cartHidden
            }
        },
        addProduct: (state, action) => {
            return {
                ...state, 
                cartItems: addProductToCart(current(state.cartItems), action.payload)}
        },
        removeProduct: (state,action) => {
            return{
                ...state,
                cartItems: removeProductFromCart(current(state.cartItems),action.payload)
            }
        },
        buyProducts: (state) => {
            return {...state, cartItems: [], total: 0}
        },
        increaseTotal: (state) => {
            return {
                ...state,
                total: totalPrice(current(state.cartItems))
            }
        },
        increaseQuantity: (state,action) => {
            return{
                ...state,
                cartItems: addQuantity(current(state.cartItems), action.payload)
            }
        },
        decreaseQuantity: (state,action) => {
            return{
                ...state,
                cartItems: substractQuantity(current(state.cartItems), action.payload)
            }
        }
    },
})

export const {
    showCart,
    addProduct,
    removeProduct,
    increaseTotal,
    increaseQuantity,
    decreaseQuantity,
    buyProducts
} = cartProductSlice.actions;

export const cartProductReducer = cartProductSlice.reducer;