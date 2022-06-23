import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .55);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyleModalTec = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: var(--grey-3);
    min-width: 250px;
    max-width: 350px;
    margin: auto;
    box-sizing: border-box;

    .header-modal{
        display: inline-flex;
        justify-content: space-between;
        background: var(--grey-2);
        width: 100vw;
        max-width: 100%;
        padding: 1rem;
        box-sizing: border-box;

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

    form{
        display: flex;
        flex-direction: column;
        width: 100vw;
        max-width: 100%;
        padding: 1rem;
        box-sizing: border-box;
        gap: 1rem;
    }
    div button{
        background-color: var(--grey-2);
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
        color: var(--grey-0);
        &:hover{
            background-color: var(--grey-1);
        }
        &:active{
            background-color: var(--grey-2);
        }
    }
`