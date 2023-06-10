import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    min-height: 15vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 5vw ;
    

    background-color: var(--color-header-gray);
`
export const StyledLogo = styled.img`
    width: min(16rem, 40%);
    height: 3.6rem;

`
export const StyledLogoDiv = styled.div`
    min-width: ${({isLeft}) => isLeft ? "min(700px, 100%)": `min(500px, 100%)`}; 
    display: flex;
    align-items: center;
    justify-content: space-between;


`