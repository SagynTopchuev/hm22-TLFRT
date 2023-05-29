import { createAsyncThunk } from '@reduxjs/toolkit'

const BASE_URL = 'https://todolist-hm-22-default-rtdb.firebaseio.com/todo'

export const getTodo = createAsyncThunk(
  'todo/getTodo',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}.json`)
      const data = await response.json()

      const result = []

      for (const key in data) {
        result.push({
          id: key,
          title: data[key].title,
          completed: data[key].completed,
        })
      }

      return result
    } catch (error) {}
    return rejectWithValue(error)
  }
)

export const postTodo = createAsyncThunk(
  'todo/postTodo',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      dispatch(getTodo())

      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}.json`, {
        method: 'DELETE',
      })

      dispatch(getTodo())

      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const putCompletedTodo = createAsyncThunk(
  'todo/putTodoCompleted',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/${data.id}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      dispatch(getTodo())

      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const putSaveEditTodo = createAsyncThunk(
  'todo/putEditSaveTodo',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/${data.id}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      dispatch(getTodo())

      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
