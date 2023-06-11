import cartImg from "../../../assets/card.svg"
import { StyledCardButton } from "./style.js"


export const CartButton = ({cart, setIsOpen}) => {


    
    return(
        <StyledCardButton onClick={() => setIsOpen(true)}>
            <img src={cartImg} alt=""/>
            <span>{cart.length}</span>
        </StyledCardButton>
    )
}