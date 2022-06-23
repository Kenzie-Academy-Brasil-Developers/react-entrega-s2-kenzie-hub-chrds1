import styled from "styled-components";

export const StyleLogin = styled.main`
    width: 100vw;
    margin: auto;
`
export const StyleFormLogin = styled.section`
    width: 100vw;
    max-width: 350px;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: auto;
    gap: .75rem;
    background-color: var(--grey-3);
    padding: 2rem;
    
    span{
        font-size: .75rem;
        font-weight: 400;
        color: var(--grey-1);
    }
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: flex-start;
        gap: .75rem;
    }
    .link{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: flex-start;
        gap: .75rem;
    }
    div{
        display: flex;
        text-align: left;
        flex-direction: column;
        max-width: 100%;
    }
    
`