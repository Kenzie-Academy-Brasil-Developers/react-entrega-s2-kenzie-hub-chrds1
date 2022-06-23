import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    max-width: 100%;
    gap: .5rem; 
    font-size: .75rem;
    font-weight: 400;
    color: var(--grey-0);
    .label{
        display: inline;
    }
    span{
        color: var(--negative);
    }

`

export const InputContainer = styled.div`
    input{
        background-color: var(--grey-2);
        color: var(--white);
        height: 3rem;
        border-radius: 0.25rem;
        font-size: 1rem;
        font-weight: 400;
        width: 100vw;
        max-width: 100%;
        border: .1rem solid var(--grey-2);
        font-family: 'Inter';
        &:hover{
            color: var(--grey-0);
            border: .1rem solid var(--grey-0);
        }
        box-sizing: border-box;
    }
`