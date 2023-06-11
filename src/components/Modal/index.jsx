import { useEffect, useRef } from "react"
import {StyledModalOverlayDiv, StyledModalboxDiv, CloseDiv, ContentDiv, TotalDiv} from "./style"
import {CartItem} from "./cartItem/index"


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
                <CloseDiv>
                    <h2>Carrinho de compras</h2>
                    <button onClick={() => setIsOpen(false)} >X</button>
                </CloseDiv>
                <ContentDiv>
                    <ul>
                        {cart.map((item) => <CartItem key={item.id} item={item} removeItemToCard={removeItemToCard}></CartItem>)}
                    </ul>
                    <TotalDiv>
                        <div>
                            <h2>total</h2>
                            <span>{
                                cart.reduce((accumulator, item) => accumulator + item.price, 0)
                                .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                                }
                            </span>
                        </div>
                        <button onClick={()=> removeItemToCard("all")}>Remover todos</button>
                    </TotalDiv>
                </ContentDiv>
            </StyledModalboxDiv>

        </StyledModalOverlayDiv>
    )
}