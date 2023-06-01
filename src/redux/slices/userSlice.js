import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    userData: {
        user: '',
        email: '',
        password: ''
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            return{
                ...state,
                userData: action.payload
            }
        },
        loginUser: (state) => {
            return{
                ...state,
                loggedIn: true
            }
        }
    }
})

export const {
    registerUser,
    loginUser
} = userSlice.actions;

export const userReducer = userSlice.reducer;