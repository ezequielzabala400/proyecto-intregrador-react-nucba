import { styled } from "styled-components";

export const CardContainer = styled.div`
    width: 270px;
    height: 140px;
    border: 4px solid var(--Red);
    display: flex;
    border-radius: 10px;
    @media (min-width: 768px) {
        flex-direction: column;
        width: 300px;
        height: unset;
        transform: scale(1);
        transition: transform 0.4s;
        &:hover{
            transform: scale(1.1);
            transition: all 0.4s;
        }
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
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--Green);
    @media (min-width: 768px){
        font-size: 2.4rem;
    }
`

export const ProductDescription = styled.p`
    width: 100%;
    max-height: 30px;
    font-family: var(--Popins);
    font-size: 1.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--Red);
    font-weight: 600;
    @media (min-width: 768px){
        font-size: 1.8rem;
        max-height: unset;
    }
`

export const ProductBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    gap: 4px;
    p{
        font-size: 1.4rem;
    }
    @media (min-width: 768px){
        flex-direction: row;
        align-items: center;
        p{
            font-weight: 700;
            font-size: 2.2rem;
        }
    }
`



