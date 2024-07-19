import React from 'react'
import LoginPage from './LoginPage'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from './app/store'

export default function App() {
  return (
    <>
  <Provider store={store} >
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={LoginPage} ></Route>
    </Routes>
    </BrowserRouter>
  </Provider>

    </>
  )
}
