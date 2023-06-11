import { useState } from 'react'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Menu } from './components/Menu'

export const App = () => {


  return (
    <>
    <GlobalStyle/>
    <Header></Header>
    <Menu></Menu>
    </>
  )
}

export default App
