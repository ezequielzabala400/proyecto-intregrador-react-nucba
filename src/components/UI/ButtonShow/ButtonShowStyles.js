import { css, styled } from "styled-components";


export const Button = styled.button`
    padding: 0 16px;
    height: 40px;
    border-radius: 30px;
    border: none;
    font-size: 1.1rem;
    font-weight: 600;
    font-family: var(--Poppins);
    color: var(--Beige);
    border: 4px solid ${({type}) => type === 'less' ? 'var(--LightViolet)' : 'var(--Green)'};
    background-color: transparent;
    cursor: pointer;
    ${({disabled}) => disabled && css`
    border-color: var(--Gray);
    cursor: not-allowed;
    `}
`