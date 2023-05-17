import { styled } from "styled-components";

export const ProductsWrapper = styled.section`
    align-self: self-start;
    width: 100%;
    padding: 40px 26px;
    max-width: 1200px;
    animation: fade 0.4s;
`

export const FilterProductsSection = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
`

export const ProductsContainer = styled.div`
    margin-top: 70px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
    @media (min-width: 768px) {
        margin: 70px auto;
        gap: 60px;
    }
`