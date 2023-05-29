import React from 'react'
import { styled } from 'styled-components'

export const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0px;
  font-size: 18rem;
  height: 89vh;
  background-color: #5d00ff;

  h1 {
    color: #00000099;
    text-shadow: 3px 2px 3px #ffffff33;
  }
`
