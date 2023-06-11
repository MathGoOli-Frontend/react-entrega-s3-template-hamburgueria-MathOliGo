import styled from "styled-components"


export const SyledSection = styled.section`
    width: 100%;
`
export const StyledUlDeck = styled.ul`
    margin-top: 2rem;
    padding: 1rem;
    display: flex;
    gap: 1rem;

    overflow-x: scroll;
    
    @media (min-width: 600px) {
        flex-wrap: wrap;
    }
`
