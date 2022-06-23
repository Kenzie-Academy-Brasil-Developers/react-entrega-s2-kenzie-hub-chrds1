import styled from "styled-components";

export const StyleRegister = styled.section`
    width: 100%;
    margin: auto;
`

export const StyleFormCadastro = styled.section`
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
    div{
        display: flex;
        text-align: left;
        flex-direction: column;
        max-width: 100%;
    }
    select{
        padding: 0;
        background-color: var(--grey-2);
        color: var(--grey-50);
        height: 3rem;
        border-radius: 0.25rem;
        font-size: 1rem;
        font-weight: 500;
        width: 100vw;
        max-width: 100%;
        border: .1rem solid var(--grey-2);
        font-family: 'Inter';
        cursor: pointer;
        &:hover{
            color: var(--grey-50);
            border: .1rem solid var(--grey-0);

        }
    }
`