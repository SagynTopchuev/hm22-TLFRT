import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  result: 0,
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addCalc: (state, action) => {
      state.result = action.payload.valueLeft + action.payload.valueRight
    },
    minusCalc: (state, action) => {
      state.result = action.payload.valueLeft - action.payload.valueRight
    },
    multiCalc: (state, action) => {
      state.result = action.payload.valueLeft * action.payload.valueRight
    },
    divide: (state, action) => {
      state.result = action.payload.valueLeft / action.payload.valueRight
    },
    reset: (state) => {
      state.result = 0
    },
  },
})

export const ActionsTypeCalc = calculatorSlice.actions
