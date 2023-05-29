import React from 'react'
import { AppRoutes } from './routers/routes'
import { Provider } from 'react-redux'
import { store } from './store'

const AppContent = () => {
  return (
    <>
      <AppRoutes />
    </>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App
