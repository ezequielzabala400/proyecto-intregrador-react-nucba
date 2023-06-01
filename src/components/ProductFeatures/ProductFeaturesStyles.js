import { styled } from "styled-components";
import { ButtonSubmitItem } from "../UI/ButtonSubmit/ButtonSubmitStyles";

export const ProductFeaturesContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    max-width: 425px;
    margin: auto;
    animation: fade 0.7s;
    @media (min-width: 768px) {
        flex-direction: row;
        max-width: 1200px;
        margin-top: 70px;
        justify-content: space-evenly;
    }
`

export const ProductImg = styled.div`
    img{
        width: 100%;
        border-radius: 10px;
    }
    @media (min-width: 768px) {
        width: 50%;
    }
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media (min-width: 768px) {
        width: 40%;
        justify-content: space-evenly;
    }
`

export const ProductName = styled.h2`
    font-size: 3.2rem;
    color: var(--Green);
    @media (min-width: 768px) {
        font-size: 4rem;
    }
`

export const ProductDesc = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--Copyright);
    line-height: 20px;
    @media (min-width: 768px) {
        font-size: 1.6rem;
    }
`

export const ProductIngredientsList = styled.div`
    h3{
        font-size: 1.6rem;
    }
    ul{
    padding: 20px;
    list-style: disc;
    font-size: 1.6rem;
    color: var(--Beige);
}
    li{
        padding: 10px;
    }
    @media (min-width: 768px) {
        h3{
            font-size: 2rem;
        }
        ul{
            font-size: 1.8rem;
        }
    }
`

export const ProductBottom = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    p{
        color: var(--Green);
        font-size: 1.8rem;
    }
    div{
        width: 100%;
    }
    @media (min-width: 768px) {

        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        p{
            font-size: 2rem;
        }
        div{
            width: 50%;
        }
    }
`

export const BtnAddCart = styled(ButtonSubmitItem)`
    width: 100%;
`