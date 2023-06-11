import trash from "../../../assets/trashcan.svg"
import {StyledDiv} from "./style"
export const CartItem = ({item, removeItemToCard}) =>{

return(
    <StyledDiv>
        <div>
            <figure>
                <img src={item.img} alt="" />
            </figure>
            <h2>{item.name}</h2>
        </div>
        <button onClick={() => removeItemToCard(item.id)}><img src={trash}/></button>
    </StyledDiv>
)
}
