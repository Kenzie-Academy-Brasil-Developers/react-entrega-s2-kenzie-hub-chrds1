import styled from "styled-components";

export const StyleHeader = styled.header`
    width: 100vw;
    max-width: 100%;
    min-width: 250px;
    display: flex;
    margin: 2rem 0 2rem 0;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    h1{
        width: 100vw;
        color: var(--primary-color) ;
        margin: auto;
        text-align: ${props => props.page === "Login"? "center": "auto"};
    }
    div{
        width: 100vw;
        max-width: 20%;
    }
`