import cart from "../../../assets/card.svg"
import { StyledCardButton } from "./style.js"

export const CartButton = ({cartList}) => {

    return(
        <StyledCardButton>
            <img src={cart} alt=""/>
            <span>15</span>
        </StyledCardButton>
    )
}