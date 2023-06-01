import { styled } from "styled-components";


export const ModalWrapper = styled.div`
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    z-index: 50;
    cursor: initial;

` 

export const ModalContainer = styled.div`
    height: 50vh;
    width: 90%;
    max-width: 500px;
    margin: auto;
    background-color: var(--Black);
    border-end-start-radius: 10px;
    border-end-end-radius: 10px;
    border: 2px solid var(--White);
    border-top-color: transparent;
    display: ${({show}) => show ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px){
        position: absolute;
        right: 0;
    }
    @media (min-width: 1200px){
        position: relative;
        left: 350px;
}
`

export const ProductsContainer = styled.div`
    height: 60%;
    overflow: auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    p{
        text-align: center;
        margin: auto;
    }
`

export const Divider = styled.div`
    width: 90%;
    height: 3px;
    background-color: var(--Gray);
`

export const BtnsContainer = styled.div`
    height: 30%;
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: var(--Lora);
`

export const TotalPrice = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 2rem;
    @media (min-width: 768px) {
        font-size: 2.6rem;
    }
`

export const BuyBtn = styled.button`
    width: 70%;
    margin: auto;
    padding: 10px;
    border-radius: 10px;
    font-weight: 900;
    background-color: transparent;
    border: 2px solid var(--White);
    color: var(--White);
    cursor: pointer;
    font-size: 1.4rem;
    @media (min-width: 768px){
        font-size: 2rem;
    }
`