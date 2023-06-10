import styled from "styled-components";

export const StyledCardButton = styled.button`
    width: 3rem;
    height: 3rem;
    border: none;
    background-color: transparent;
    

    span{
        background-color: var(--color-color-primary);
        color: var(--color-white);
        padding: 1px 2px;
        border-radius: 4px;

        position: relative;
        bottom: 2rem;
        left: 1rem;
    }
    img{
        width: 2rem;
        height: 2rem;
        position: relative;
        bottom: -.5rem;
    }
`