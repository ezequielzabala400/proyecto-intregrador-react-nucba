import { styled } from "styled-components";


export const ProductContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 10px;
    border: 2px solid var(--White);
    border-radius: 10px;
    display: flex;
    align-items: center;
`

export const ProductImage = styled.div`
    width: 50%;
    img{
        width: 100%;
        height: 100px;
        object-fit: cover;
    }
`

export const ProductInfo = styled.div`
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 1.4rem;
    h3{
        text-align: center;
        font-family: var(--Poppins);
        width: 90%;
        margin: 0 auto;
    }
`

export const ProductQuantityContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    span{
        font-size: 1.8rem;
        font-weight: 900;
    }
    @media (min-width: 425px){
        gap: 20px;
    }
`

export const ProductQuantityBtn = styled.button`
    padding: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--Black);
    border: none;
    color: var(--White);
    font-size: 1rem;
    cursor: pointer;
    border: 2px solid var(--White);
`

export const TrashIconContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    padding: 12px;
    cursor: pointer;
    font-size: 1.8rem;
`