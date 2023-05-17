import { styled } from "styled-components";

export const TextAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    width: 100%;
`

export const TextAreaLabel = styled.label`
    font-size: 1.6rem;
    padding-left: 12px;
    font-family: var(--Lora);
`

export const TextAreaField = styled.textarea`
    width: 100%;
    height: 160px;
    padding: 16px;
    background-color: transparent;
    border-radius: 10px;
    border: 2px solid ${({isErrors}) => isErrors ? 'var(--Error)' : 'var(--Green)'};
    color: var(--White);
    resize: none;

`

export const TextAreaError = styled.small`
    font-size: 1.4rem;
    text-align: center;
    color: var(--Error);
    font-family: var(--Lora);
`