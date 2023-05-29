import React, { useEffect } from 'react'
import { TodoForm } from './TodoForm'
import { styled } from 'styled-components'
import { TodoItem } from './TodoItem'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteTodo,
  getTodo,
  putCompletedTodo,
  putSaveEditTodo,
} from '../../store/todo/todo-thunk'
import { Loading } from '../../components/UI/Loading'
import { Error } from '../../components/UI/Error'

export const TodoList = () => {
  const { todo, isLoading, isError } = useSelector((state) => state.todo)
  const dispatch = useDispatch()

  const removeHandler = (id) => {
    dispatch(deleteTodo(id))
  }

  const completedHandler = (data) => {
    const result = {
      ...data,
      completed: !data.completed,
    }

    dispatch(putCompletedTodo(result))
  }

  const saveEditHandler = (data, title) => {
    const result = {
      ...data,
      title: title,
    }
    dispatch(putSaveEditTodo(result))
  }

  useEffect(() => {
    dispatch(getTodo())
  }, [dispatch])

  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error>{isError ? isError : 'Something went wrong'}</Error>}
      <Container>
        <TodoForm />
        {todo.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            removeHandler={removeHandler}
            completedHandler={completedHandler}
            saveEdit={saveEditHandler}
          />
        ))}
      </Container>
    </>
  )
}

const Container = styled.div`
  margin-left: 103px;
  margin-bottom: 100px;
`
