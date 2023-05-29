import { todoSlice } from './todo/todoSlice'
import { calculatorSlice } from './calculator/calculatorSlice'
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [todoSlice.name]: todoSlice.reducer,
    [calculatorSlice.name]: calculatorSlice.reducer,
  },
})
