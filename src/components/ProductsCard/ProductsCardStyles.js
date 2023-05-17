import { styled } from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    height: 140px;
    border: 4px solid var(--Violet);
    display: flex;
    border-radius: 10px;
    max-width: 270px;
    @media (min-width: 768px) {
        flex-direction: column;
        max-width: 300px;
        height: unset;
    }
`

export const CardImg = styled.div`
    img{
        width: 100%;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        height: 100%;
        @media (min-width: 768px){
            border-top-right-radius: 6px;
            border-bottom-left-radius: 0;
            height: 50%;
        }
    }
`

export const CardInfo = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
    @media (min-width: 768px){
        width: unset;
    }
`

export const ProductTitle = styled.h3`
    font-size: 2rem;
    font-family: var(--Poppins);
    @media (min-width: 768px){
        font-size: 2.4rem;
    }
`

export const ProductDescription = styled.p`
    width: 100%;
    max-height: 30px;
    font-family: var(--Popins);
    font-size: 1.2rem;
    @media (min-width: 768px){
        font-size: 1.6rem;
        max-height: unset;
    }
`

export const ProductBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        font-size: 1.4rem;
    }
    @media (min-width: 768px){
        p{
            font-weight: 700;
            font-size: 2.2rem;
        }
    }
`



