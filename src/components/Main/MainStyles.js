import { styled } from "styled-components";

export const MainWrapper = styled.main`
    margin-top: 70px;
    min-height: calc(100vh - 70px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        margin-top: unset;
    }
`