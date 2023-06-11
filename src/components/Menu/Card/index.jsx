import {StyledLi} from "./style"

export const Card = ({item, addItemToCard}) => {


    return (
        <StyledLi>
            <figure>
            <img src={item.img} alt="" />
            </figure>
            <div>
                <h2>{item.name}</h2>
                <p>{item.category}</p>
                <span>{item.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                <button onClick={() => addItemToCard(item)}>Adicionar</button>
            </div>
        </StyledLi>
    )
}