import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { ActionsTypeCalc } from '../store/calculator/calculatorSlice'

export const Calculator = () => {
  const { result } = useSelector((state) => state.calculator)
  const dispatch = useDispatch()

  const [valueLeft, setValueLeft] = useState('')
  const [valueRight, setValueRight] = useState('')

  const addHandler = () => {
    dispatch(
      ActionsTypeCalc.addCalc({
        valueLeft: +valueLeft,
        valueRight: +valueRight,
      })
    )
  }

  const subtractionHandler = () => {
    dispatch(
      ActionsTypeCalc.minusCalc({
        valueLeft: +valueLeft,
        valueRight: +valueRight,
      })
    )
  }

  const multipleHandler = () => {
    dispatch(
      ActionsTypeCalc.multiCalc({
        valueLeft: +valueLeft,
        valueRight: +valueRight,
      })
    )
  }

  const dividedHandler = () => {
    dispatch(
      ActionsTypeCalc.divide({
        valueLeft: +valueLeft,
        valueRight: +valueRight,
      })
    )
  }

  const resetHandler = () => {
    setValueLeft('')
    setValueRight('')

    dispatch(ActionsTypeCalc.reset())
  }

  return (
    <Container>
      <Box>
        <BoxRes>
          <h1>{result}</h1>
          <button onClick={resetHandler}>x</button>
        </BoxRes>

        <ContainerInput>
          <input
            type="number"
            value={valueLeft}
            onChange={(e) => setValueLeft(e.target.value)}
          />
          <input
            type="number"
            value={valueRight}
            onChange={(e) => setValueRight(e.target.value)}
          />
        </ContainerInput>
        <ContainerButton>
          <div className="box">
            <Button onClick={addHandler}>+</Button>
            <Button onClick={multipleHandler}>×</Button>
            <Button onClick={subtractionHandler}>─</Button>
            <Button onClick={dividedHandler}>÷</Button>
          </div>
        </ContainerButton>
      </Box>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
`

const BoxRes = styled.div`
  width: 690px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 4rem;

    cursor: pointer;
  }
`

const Box = styled.div`
  width: 760px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #5d00ff;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  gap: 20px;

  h1 {
    font-size: 3rem;
  }
`

const ContainerInput = styled.div`
  display: flex;
  gap: 20px;

  input {
    font-size: 2rem;
    padding: 6px 10px;
    border: none;
    outline: none;
    border-radius: 6px;
  }
`

const ContainerButton = styled.div`
  .box {
    width: 200px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
`

const Button = styled.button`
  border: 1px solid #fff;
  font-size: 4rem;
  border-radius: 16px;

  background-color: #fff;
  color: #5d00ff;

  width: 79px;
  height: 80px;

  &:hover {
    background-color: #5d00ff;
    color: #fff;
  }

  &:active {
    background-color: #fff;
    color: #5d00ff;
  }

  cursor: pointer;
`

/* 

  <Container>
      <Box>
        <BoxRes>
          <h1>
            {+valueLeft === '' ? 0 : +valueLeft} +{' '}
            {+valueRight === '' ? 0 : +valueRight} = {+res}
          </h1>
          <button onClick={resetHandler}>x</button>
        </BoxRes>

        <ContainerInput>
          <input
            type="number"
            value={valueLeft}
            onChange={(e) => setValueLeft(e.target.value)}
          />
          <input
            type="number"
            value={valueRight}
            onChange={(e) => setValueRight(e.target.value)}
          />
        </ContainerInput>
        <ContainerButton>
          <div className="box">
            <Button onClick={addHandler}>+</Button>
            <Button onClick={multipleHandler}>×</Button>
            <Button onClick={subtractionHandler}>─</Button>
            <Button onClick={dividedHandler}>÷</Button>
          </div>
        </ContainerButton>
      </Box>
    </Container>

    
*/
