import { createSlice } from "@reduxjs/toolkit";

export const counterSlices = createSlice({
    initialState : 0,
    name: 'counter',
    reducers:
    {
        increment: (state)=> state +1,
        decrement: (state)=> state - 1
    }
})

export const {increment,  decrement} = counterSlices.actions
export default counterSlices.reducer;