import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    a, ul, li {
        text-decoration: none;
    }

    :root{
        --primary-color: #ff577f;
        --primary-Focus-color: #ff427f;
        --primary-negative: #59323f;
        --grey-0: #f8f9fa;
        --grey-1: #868e96;
        --grey-2: #343b41;
        --grey-3: #212529;
        --grey-4: #121214;
        --grey-50: #868E96;
        --sucess: #3fe864;
        --negative: #e83f5b;
        --white: #ffffff;
        --black: #000000;
    }
    body{
        font-family: 'Inter';
        color: var(--white);
        background-color: var(--black);
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100vw;
        max-width: 90%;
        
    }
    h1{
        font-size: 1.2rem;
        font-weight: 700;
    }
    h2{
        font-size: 1rem;
        font-weight: 600;
    }
    h3{ 
        font-size: .875rem;
        font-weight: 600;
    }

`