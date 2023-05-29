import React from 'react'
import { styled } from 'styled-components'

export const Loading = () => {
  console.log('Loading: ')
  return (
    <Container>
      <span className="loader"></span>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  /* background-color: #434343; */
  background-color: rgba(0, 0, 0, 0.75);

  backdrop-filter: blur(2px);

  width: 100vw;
  height: 110vh;
`
