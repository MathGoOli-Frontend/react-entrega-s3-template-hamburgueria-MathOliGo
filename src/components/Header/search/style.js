import styled from "styled-components";

export const SearchDiv = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    overflow-x: hidden;
    
    border: 2px solid var(--color-grey-100);
    border-radius: var(--radius);
    background-color: #fff;
    padding: 3px;
    input{
        width: 100%;
        height: 3.5rem;
        border: none;
        
        font-size: var(--input-font-size);
        outline: none;
    }

    button{
        width: 4rem;
        height: 3.5rem;
        border: none;
        border-radius: var(--radius);
        background-color: var(--color-color-primary);

        display: block;
        right: 3rem;
        

        

    }

`