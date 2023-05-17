import { styled } from "styled-components";

export const ButtonItem = styled.button`
    width: 180px;
    height: 40px;
    border-radius: 30px;
    border: none;
    background-color: var(--Beige);
    color: var(--Black);
    font-size: 1.6rem;
    font-weight: 600;
    transition: color, background-color 0.3s;
    font-family: var(--Poppins);
    cursor: pointer;
    &:hover{
        background-color: var(--Black);
        border: 1px solid var(--Green);
        color: var(--Green);
        transition: all 0.3s;
    }
`