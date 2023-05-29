import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { postTodo } from '../../store/todo/todo-thunk'

export const TodoForm = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (event) => {
    event.preventDefault()

    const data = {
      title: value,
      completed: false,
    }

    dispatch(postTodo(data))
    setValue('')
  }

  const enabled = value !== ''

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button disabled={!enabled}>создать</Button>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-size: 24px;
    line-height: 28px;
    color: #090909;
  }
`

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  gap: 36px;
`

const Input = styled.input`
  background: #ffffff;
  mix-blend-mode: normal;
  border: 2px solid #8a72ea;
  box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  width: 1100px;
  font-size: 2rem;
  padding: 10px 20px;
  outline: none;
`

const Button = styled.button`
  background: #ffffff;
  color: #5d00ff;
  mix-blend-mode: normal;
  border: 1px solid #bab5cd;
  box-shadow: 0px 0px 19px 1px #0000003f;
  border-radius: 10px;

  font-size: 24px;
  line-height: 28px;
  padding: 15px 30px 14px 29px;
  transition: 0.5s;

  &:hover {
    color: #ffffff;
    background-color: #5d00ff;
  }

  &:active {
    color: #5d00ff;
    background-color: #ffffff;
  }

  &:disabled {
    color: #ffffff;
    background: #d5d5d5;
  }

  cursor: pointer;
`
