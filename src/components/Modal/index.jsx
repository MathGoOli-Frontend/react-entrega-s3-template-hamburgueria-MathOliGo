import { useEffect, useRef } from "react"
import {StyledModalOverlayDiv, StyledModalboxDiv} from "./style"

export const Modal = ({setIsOpen, cart, removeItemToCard}) =>{
    const modalRef = useRef(null)


    useEffect(()=> {
        const handleOutClick = (event) => {
            if(!modalRef.current?.contains(event.target)){
                setIsOpen(false)
            }
        }
        window.addEventListener("mousedown", handleOutClick)

        return () =>{
            window.removeEventListener("mousedown", handleOutClick)
        }
    },[])

    return(
        <StyledModalOverlayDiv role="dialog">
            <StyledModalboxDiv ref={modalRef}>
                <button onClick={() => setIsOpen(false)} >X</button>
                <ul>
                    {cart.map((item)=>{
                        return(
                            <li key={item.id}>
                                <img src={item.img} alt="" />
                                <h2>{item.name}</h2>
                                <button onClick={() => removeItemToCard(item.id)}>remover</button>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <h2>total</h2>
                    <span>{
                        cart.reduce((accumulator, item) => accumulator + item.price, 0)
                        .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                        }
                    </span>
                    <button onClick={()=> removeItemToCard("all")}>Remover todos</button>
                </div>
            </StyledModalboxDiv>

        </StyledModalOverlayDiv>
    )
}