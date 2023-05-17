import { styled } from "styled-components";

export const ProductButton = styled.button`
    height: 30px;
    width: 50px;
    border-radius: 10px;
    border: none;
    background-color: transparent;
    color: var(--White);
    border: 3px solid var(--Violet);
    font-family: var(--Poppins);
    cursor: pointer;
    transition: background-color 0.4s;
    &:hover{
        background-color: var(--Violet);
        transition: all 0.4s;
    }
    @media (min-width: 768px){
        width: 70px;
    }
`