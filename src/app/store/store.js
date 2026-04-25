import { configureStore } from '@reduxjs/toolkit'
import phoneBookReducer from '../redux/phoneBookSlice'

export const store = configureStore({
    reducer: {
        phoneBookSlice: phoneBookReducer
    }
})