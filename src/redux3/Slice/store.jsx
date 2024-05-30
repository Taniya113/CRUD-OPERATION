import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './index'

export const store= configureStore({
    reducer:
    {
        counter: counterSlice
    }
})