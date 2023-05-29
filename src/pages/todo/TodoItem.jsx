import { useState } from 'react'
import { styled } from 'styled-components'

export const TodoItem = ({
  item,
  removeHandler,
  completedHandler,
  saveEdit,
}) => {
  const [editValue, setEditValue] = useState(item.title)
  const [editTodo, setEditTodo] = useState(false)

  const editHandler = () => {
    setEditTodo(true)
  }

  const saveEditHandler = (event) => {
    event.preventDefault()

    saveEdit(item, editValue)
    setEditTodo(false)
  }

  const enabled = editValue !== ''

  return (
    <Container>
      {editTodo === false ? (
        <Box>
          <p className={item.completed ? 'completed' : ''}>{item.title}</p>
          <ButtonContainer>
            <Button
              padding="15px 19px 14px 18px"
              backgroundcolor="#0071F6"
              bordercolor="#3C11EB"
              onClick={() => editHandler()}
              color="#fff"
            >
              Изменить
            </Button>
            <Button
              padding="15px 12px"
              backgroundcolor="#1EEC33"
              bordercolor="#BAB5CD"
              onClick={() => completedHandler(item)}
              color="#fff"
            >
              Завершить
            </Button>
            <Button
              padding="15px 28px"
              backgroundcolor="#FF6B6B"
              bordercolor="#BAB5CD"
              onClick={() => removeHandler(item.id)}
              color="#fff"
            >
              Удалить
            </Button>
          </ButtonContainer>
        </Box>
      ) : (
        <Form>
          <Input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />

          <Button
            padding="15px 20px"
            backgroundcolor="#7f6bff"
            bordercolor="#BAB5CD"
            color="#fff"
            disabled={!enabled}
            onClick={saveEditHandler}
          >
            сохранить
          </Button>
        </Form>
      )}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 46px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  background: #ffffff;
  border: 1px solid #dad3d3;
  border-radius: 10px;
  padding: 7px 30px 8px 25px;

  p {
    font-size: 24px;
    line-height: 28px;
  }

  .completed {
    color: #353535;
    text-decoration: line-through;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 24px;
`

const Button = styled.button`
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundcolor};
  border: 1px solid ${(props) => props.bordercolor};
  mix-blend-mode: normal;
  box-shadow: 0px 0px 19px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-size: 24px;
  line-height: 28px;
  color: ${(props) => props.color};
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: ${(props) => props.color};
    color: ${(props) => props.backgroundcolor};
  }

  &:active {
    background-color: ${(props) => props.backgroundcolor};
    color: ${(props) => props.color};
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

// const ButtonE = styled.button`
//   background: #ffffff;
//   color: #5d00ff;
//   mix-blend-mode: normal;
//   /* border: 1px solid #bab5cd;
//   box-shadow: 0px 0px 19px 1px #0000003f;
//   border-radius: 10px;

//   font-size: 24px;
//   line-height: 28px;
//   padding: 15px 30px 14px 29px;
//   transition: 0.5s;

//   &:hover {
//     color: #ffffff;
//     background-color: #5d00ff;
//   }

//   &:active {
//     color: #5d00ff;
//     background-color: #ffffff;
//   }

//   &:disabled {
//     color: #ffffff;
//     background: #d5d5d5;
//   }

//   cursor: pointer; */
// `
