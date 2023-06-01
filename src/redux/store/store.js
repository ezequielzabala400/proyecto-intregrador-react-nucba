import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { toggleMenuReducer } from "../slices/toggleMenuSlice";
import { productsReducer } from "../slices/productsSlice";
import { cartProductReducer } from "../slices/cartProductsSlice";
import { persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import { userReducer } from "../slices/userSlice";

const reducers = combineReducers({
    toggleMenu: toggleMenuReducer,
    products: productsReducer,
    cart: cartProductReducer,
    user: userReducer
})

const configReducer = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const reducersPersisted = persistReducer(configReducer, reducers)

export const store = configureStore({
    reducer: reducersPersisted
})

export const persistor = persistStore(store);