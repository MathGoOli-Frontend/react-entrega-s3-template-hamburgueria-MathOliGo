import { useState } from 'react'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Modal } from "./components/Modal/index"

export const App = () => {
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState("")
  const [ isOpen, setIsOpen ] = useState(false)
  
  const addItemToCard = (item) => {
    if(cart.find(e => e.id === item.id)){
      alert(`Voçe já adicionou ${item.name} ao carrinho`)
    } else {
      setCart([...cart, item])
    }
  }
  const removeItemToCard = (id) => {
    if(id === "all"){
      setCart([])
    }else{
      setCart(cart.filter(item => item.id !== id))
    }
  }

  return (
    <>
      <GlobalStyle/>
      <Header cart={cart} setSearch={setSearch} search={search} setIsOpen={setIsOpen}></Header>
      <Menu search={search} addItemToCard={addItemToCard} ></Menu>

      {isOpen ? <Modal setIsOpen={setIsOpen} cart={cart} removeItemToCard={removeItemToCard}></Modal> : null}
    </>
  )
}

export default App
