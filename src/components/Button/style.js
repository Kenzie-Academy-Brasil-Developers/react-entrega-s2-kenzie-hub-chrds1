import styled from "styled-components";

export const Container = styled.button`
    background-color: ${(props)=> 
        (props.background ==="primary"
        ?
        "#ff577f"
        :
        props.background ==="negative"
        ?
        "#59323f"
        :
        props.background ==="navi"
        ?
        "#343b41"
        :
        "#868e96"
    )};
    &:hover{
        background-color: ${(props)=> 
        (props.background ==="primary"
        ?
        "#ff427f"
        :
        props.background ==="negative"
        ?
        "#e83f5b"
        :
        props.background ==="navi"
        ?
        "#868e96"
        :
        "#343b41"
    )};
    };
    &:active{
        background-color: ${(props)=> 
        (props.background ==="primary"
        ?
        "#ff577f"
        :
        props.background ==="negative"
        ?
        "#59323f"
        :
        "#868e96"
    )};
    };
    color: var(--white);
    height: 3rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 500;
    width: 100vw;
    max-width: 100%;
    border: none;
    font-family: 'Inter';
    cursor: pointer;
`