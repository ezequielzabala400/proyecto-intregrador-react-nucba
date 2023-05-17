import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    hidden: true
}

const toggleMenuSlice = createSlice({
    name: 'navbarMenu',
    initialState,
    reducers: {
        showMenu: (state) => {
            return {...state, hidden: !state.hidden}
        }
    }
})

export const { showMenu } = toggleMenuSlice.actions;

export const toggleMenuReducer = toggleMenuSlice.reducer;