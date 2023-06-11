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
export const StyledLogoLeftDiv = styled.div`
    min-width: min(700px, 100%); 
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 700px) {
        min-width: 0;
        width: 60%;
    }
`

export const StyledLogoRightDiv = styled.div`
    min-width: 100%; 
    width: 100%; 
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 700px) {
        min-width: 0;
        width: 30%;
    }

`