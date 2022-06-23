import styled from "styled-components";

export const StyleHome = styled.section`
    width: 100vw;
    max-width: 100%;
    margin: auto;

    main{
        display: flex;
        flex-direction: column;
    }
    .header{
        display: flex;
        flex-direction: column;
    }
    .apresentation{
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
    }

    .apresentation span{
        font-weight: 400;
        font-size: .75rem;
        
    }
    .tecnologies{
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
    }
    .tecnologies button{
        background-color: var(--grey-2);
        width: 1.5rem;
        height: 1.5rem;
        font-weight: 700;
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