import { Alert, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import { styled } from 'styled-components'

export const Error = ({ children }) => {
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  })
  const { vertical, horizontal, open } = state
  console.log('open: ', open)

  const handleClose = () => {
    setState({ ...state, open: false })
  }

  return (
    <Container>
      <Snackbar
        open={true}
        autoHideDuration={6000}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
        onClose={handleClose}
      >
        <Alert
          sx={{ backgroundColor: '#D54848', color: '#fff', fontSize: '1.2rem' }}
          severity="error"
        >
          {children} !
        </Alert>
      </Snackbar>
    </Container>
  )
}

const Container = styled.div`
  .css-1w6sn68-MuiPaper-root-MuiAlert-root .MuiAlert-icon {
    color: white;
    margin-top: 1px;
  }
`
