import { styled } from "styled-components";

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
    @media (min-width: 768px) {
        max-width: 400px;
    }
`

export const FindImage = styled.label`
    position: absolute;
    padding: 12px 20px;
    font-size: 1.6rem;
    @media (min-width: 768px){
        padding: 18px 24px;
    }
`

export const InputProductField = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 46px;
    background-color: transparent;
    color: var(--White);
    border: 4px solid var(--Red);
    border-radius: 30px;
    font-family: var(--Poppins);
    &::placeholder{
        color: var(--White);
        font-weight: 700;
    }
    @media (min-width: 768px){
        height: 50px;
        font-size: 1.6rem;
    }
`