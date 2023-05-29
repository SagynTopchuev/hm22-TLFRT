import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useSelector } from 'react-redux'
import { Login } from '../components/Login'
import { Home } from '../pages/Home'
import { TodoList } from '../pages/todo/TodoList'
import { Calculator } from '../pages/Calculator'

export const AppRoutes = () => {
  const { auth } = useSelector((state) => state.auth)

  return (
    <>
      <Routes>
        <Route path="/login" element={auth ? <Navigate to="/" /> : <Login />} />

        <Route path="/" element={auth ? <Layout /> : <Navigate to="/login" />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="todo-list" element={<TodoList />} />
        </Route>
        <Route path="*" element={<Navigate to={auth ? '/' : 'login'} />} />
      </Routes>
    </>
  )
}
