import { Link } from "react-router-dom";
import { styled } from "styled-components";


export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-family: var(--Poppins);
    @media (min-width: 425px) {
        margin: auto;
    }
`

export const InputLabel = styled.label`
    font-size: 1.3rem;
    padding-left: 14px;
    @media (min-width: 768px) {
        font-size: 1.8rem;
    }
`

export const InputField = styled.input`
    border: 4px solid ${({isErrors}) => isErrors ? 'var(--Error)' : 'var(--White)'};
    border-radius: 30px;
    padding: 10px;
    width: 100%;
    background-color: transparent;
    color: var(--White);
    @media (min-width: 425px) {
        width: 340px;
    }
`

export const ForgotPasswordLink = styled(Link)`
    padding-right: 10px;
    align-self: flex-end;
    color: var(--LightViolet);
    font-size: 1rem;
    @media (min-width: 768px) {
        font-size: 1.4rem;
    }
`

export const ErrorMsg = styled.small`
    color: var(--Error);
    text-align: center;
    font-size: 1.2rem;
    @media (min-width: 768px){
        font-size: 1.4rem;
    }
`