import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import { useDispatch } from 'react-redux'
import { ActionsTypeAuth } from '../store/auth/authSlice'

export const Header = () => {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    localStorage.removeItem('key')
    dispatch(ActionsTypeAuth.logout())
  }

  return (
    <Container>
      <Ul>
        <li>
          <LinkS
            to="calculator"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <p>Calculator</p>
          </LinkS>
        </li>
        <li>
          <LinkS
            to="todo-list"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <p>Todo list</p>
          </LinkS>
        </li>
      </Ul>
      <div>
        <Button onClick={logoutHandler}>LogOut</Button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: #5d00ff;
  padding: 20px 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Ul = styled.ul`
  display: flex;
  gap: 20px;

  li {
    list-style: none;
    font-size: 2rem;

    .active {
      color: #fecc1b;
    }
  }
`

const LinkS = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
`

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 6px;
  background-color: transparent;
  color: #fff;
  background-color: #fecc1b;
  border: none;
  transition: 0.3s;

  &:hover {
    color: #fecc1b;
    background-color: #fff;
  }

  cursor: pointer;
`
