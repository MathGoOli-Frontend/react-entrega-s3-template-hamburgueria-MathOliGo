import styled from "styled-components";


export const StyledLi = styled.li`
    min-width: 300px;
    height: 346px;

    border: 2px solid var(--color-grey-100);
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;


    :hover{
        border: 2px solid var(--color-color-primary);
    }
    figure{
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--color-grey-0);
    }

    img{
        max-width: 100%;
        height: 100%;
        object-fit: contain;
    }

    div{
        display: flex;
        flex-direction: column;
        padding: 2rem;
        gap: 1rem;
    }

    h2{
        font-size: 2.2rem;
        font-weight: 700;
    }

    p{
        font-size: 1.2rem;
        font-weight: 400;
    }

    span{
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--color-color-primary);
    }

    button{
        padding: 1.1rem 2rem;
        width: 10rem;
        border: none;
        border-radius: var(--radius);
        background-color: var(--color-color-primary);
        color: var(--color-white)
    }

`