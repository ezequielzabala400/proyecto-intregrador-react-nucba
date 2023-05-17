import { styled } from "styled-components";

export const NotFoundWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fade 0.4s;
    img{
        height: 300px;
        width: 300px;
    }

    h2{
        font-size: 3rem;
        color: var(--Green);
        font-family: var(--Lora);
    }

    @media (min-width: 768px) {
        flex-direction: row;
    }
`