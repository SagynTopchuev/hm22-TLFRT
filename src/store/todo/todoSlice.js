import { createSlice } from '@reduxjs/toolkit'
import { deleteTodo, getTodo, postTodo, putCompletedTodo } from './todo-thunk'

const initialState = {
  todo: [],
  isLoading: false,
  isError: '',
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.fulfilled, (state, action) => {
        state.todo = action.payload
        state.isLoading = false
      })
      .addCase(getTodo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTodo.rejected, (state, action) => {
        state.isError = action.payload
        state.isLoading = false
      })

    builder
      .addCase(postTodo.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(postTodo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(postTodo.rejected, (state, action) => {
        state.isError = action.payload
        state.isLoading = false
      })
    builder
      .addCase(deleteTodo.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(deleteTodo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isError = action.payload
        state.isLoading = false
      })
    builder
      .addCase(putCompletedTodo.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(putCompletedTodo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(putCompletedTodo.rejected, (state, action) => {
        state.isError = action.payload
        console.log('action: ', action)
        state.isLoading = false
      })
    // builder
    //   .addCase(postTodo.fulfilled, (state) => {
    //     state.isLoading = false
    //   })
    //   .addCase(postTodo.pending, (state) => {
    //     state.isLoading = true
    //   })
    //   .addCase(postTodo.rejected, (state, action) => {
    //     state.isError = action.payload
    //     state.isLoading = false
    //   })
  },
})

export const ActionsTypeTodo = todoSlice.actions
