import { styled } from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    @media (min-width: 768px) {
        width: ${({small}) => small ? '50%' : '100%'};
    }
`

export const InputLabel = styled.label`
    font-size: 1.6rem;
    padding-left: 12px;
    font-family: var(--Lora);
`

export const InputField = styled.input`
    width: 100%;
    height: 40px;
    padding: 16px;
    background-color: transparent;
    border-radius: 30px;
    border: 2px solid ${({isErrors}) => isErrors ? 'var(--Error)' : 'var(--Green)'};
    color: var(--White);

`

export const InputError = styled.small`
    font-size: 1.4rem;
    text-align: center;
    color: var(--Error);
    font-family: var(--Lora);
`