import styled from "styled-components";


export const StyledDiv = styled.li`
    width: 430px;
    height: 80px;

    display: flex;
    


    padding: 1rem;
    div{
        width: 80%;
        height: 100%;
        display: flex;
        gap: 1rem;
    }
    figure{
        background-color: var(--color-grey-100);
        border-radius: var(--radius);
    }   

    img{
        height: 100%;
    }

    h2{
        font-size: 1.8rem;
        font-weight: 700;
    }
    button{
        width: 30px;
        height: 30px;

        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        background-color: transparent;
    }

`