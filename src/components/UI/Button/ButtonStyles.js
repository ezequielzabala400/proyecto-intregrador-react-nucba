import { styled } from "styled-components";

export const ButtonItem = styled.button`
    width: 180px;
    height: 40px;
    border-radius: 30px;
    border: none;
    background-color: var(--Black);
    color: var(--White);
    border: 3px solid var(--White);
    font-size: 1.6rem;
    font-weight: 600;
    transition: color, background-color 0.3s;
    font-family: var(--Poppins);
    transition: color 0.3s,border 0.3s;
    cursor: pointer;
    &:hover{
        background-color: var(--Black);
        border: 3px solid var(--Red);
        color: var(--Red);
        transition: all 0.3s;
    }
`