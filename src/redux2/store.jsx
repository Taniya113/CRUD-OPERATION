import { configureStore } from '@reduxjs/toolkit'
import counterSlices from './slices/counter'

export const store= configureStore({
    reducer:{
        counter: counterSlices,
    }
})
