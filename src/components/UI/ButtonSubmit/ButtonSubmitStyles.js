import { styled } from "styled-components";

export const ButtonSubmitItem = styled.button`
    width: 180px;
    height: 40px;
    border-radius: 30px;
    border: 2px solid var(--Beige);
    background-color: transparent;
    color: var(--Beige);
    font-size: 1.6rem;
    font-weight: 600;
    transition: color, border 0.3s;
    font-family: var(--Poppins);
    cursor: pointer;
    &:hover{
        border: 2px solid var(--Green);
        color: var(--Green);
        transition: all 0.3s;
    }
`