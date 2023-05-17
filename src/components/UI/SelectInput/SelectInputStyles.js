import { styled } from "styled-components";

export const SelectInputContainer = styled.div`
    position: relative;
    width: 200px;
`

export const ArrowImage = styled.div`
    position: absolute;
    right: 0;
    padding-right: 16px;
    padding-top: 10px;
    color: var(--White);
    font-size: 1.8rem;
    @media (min-width: 768px){
        padding-top: 16px;
    }
`

export const SelectInputField = styled.select`
    width: 100%;
    height: 40px;
    padding: 0 16px;
    font-weight: 700;
    background-color: transparent;
    color: var(--White);
    border: 4px solid var(--Violet);
    border-radius: 10px;
    appearance: none;
    font-family: var(--Poppins);
    option{
        background-color: var(--Black);
    }
    @media (min-width: 768px) {
        height: 50px;
    }
`