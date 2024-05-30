import { createSlice } from "@reduxjs/toolkit";

export const couterSlice = createSlice({
    name: 'counter',
    initialState:{
        user: ""
    },

    reducers:{
        login:(state, action)=>
            {
                state.user= action.payload
            },

            increment: (state)=>
                {
                    state.value += 1
                },

            decrement:(state)=>
                {
                    state.value -= 1
                },
            
            incrementByAmount:(state, action)=>
                {
                    state.value += action.payload
                },
            
    },
})

export const { login } = couterSlice.actions

export default couterSlice.reducer