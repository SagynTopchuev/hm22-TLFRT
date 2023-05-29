import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  auth: localStorage.getItem('key') || false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.auth = true
    },
    logout: (state) => {
      state.auth = false
    },
  },
})

export const ActionsTypeAuth = authSlice.actions
