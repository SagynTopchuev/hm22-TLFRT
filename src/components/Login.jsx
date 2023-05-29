import React from 'react'
import { styled } from 'styled-components'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { ActionsTypeAuth } from '../store/auth/authSlice'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export const Login = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector((state) => state.auth)

  const submitHandler = () => {
    localStorage.setItem('key', !auth)
    dispatch(ActionsTypeAuth.login())
  }

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },

    mode: 'onChange',
    resolver: zodResolver(schema),
  })

  return (
    <Container>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <InputContainer>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            error={!!formState.errors.email}
            {...register('email')}
            sx={{ width: '400px' }}
          />

          <TextField
            type="password"
            label="password"
            variant="outlined"
            {...register('password')}
            error={!!formState.errors.password}
            sx={{ width: '400px', fontSize: '2rem' }}
          />
        </InputContainer>
        <Button type="submit" variant="outlined" sx={{ fontSize: '1.4rem' }}>
          Login
        </Button>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.26);
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: -120px;
  background-color: #fff;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  padding: 20px 20px;
  border-radius: 6px;
  gap: 20px;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 10rem;

  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    font-size: 1.2rem;
  }
`
