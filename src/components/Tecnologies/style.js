import styled from "styled-components";

export const StyleTecnologies = styled.div`
    width: 100vw;
    max-width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    background-color: var(--grey-3);
    padding: 1rem;
    gap: 1rem;
    box-sizing: border-box;

    .card{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: .75rem;
        gap: .75rem;
        background-color: var(--grey-2);
        border-radius: 0.5rem;
    }

`