import { styled } from "styled-components";

export const HomeContainer = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    @media (min-width: 768px) {
        flex-direction: row;
        max-width: 1200px;
        margin: auto;
        width: 100%;
        justify-content: space-evenly;
    }
    @media (min-width: 1024px) {
        justify-content: space-between;
    }
`

export const HomeImageMobile = styled.div`
    height: 200px;
    margin: auto;
    display: flex;
    justify-content: center;
    animation: fade 0.4s;

    img{
        height: 90%;
    }
    @media (min-width: 768px) {
        display: none;
    }
`

export const HomeImageDesktop = styled.div`
    display: none;
    height: 500px;
    width: 440px;
    animation: fade 0.4s;

    @media (min-width: 768px) {
        display: flex;
    }
    @media (min-width: 1024px) {
        height: 700px;
        width: 500px;
    }
`

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    @media (min-width: 1024px) {
        padding-right: 70px;
    }
`

export const HomeTitle = styled.h1`
    font-size: 3rem;
    font-family: var(--Dancing-Script);
    -webkit-animation: text-flicker-in-glow 2s ease-in both;
	        animation: text-flicker-in-glow 2s ease-in both;
    @media (min-width: 1024px) {
        font-size: 5rem;
    }
`

export const HomeSubTitle = styled.h2`
    width: 200px;
    text-align: center;
    font-family: var(--Poppins);
    color: var(--Red);
    opacity: 0;
    animation: fade 0.4s 2s forwards;
    @media (min-width: 768px) {
        width: 260px;
        font-size: 2rem;
    }
    @media (min-width: 1024px) {
        font-size: 2.2rem;
        width: 320px;
    }
`

export const HomeBtnContainer = styled.div`
    opacity: 0;
    animation: fade 0.4s 2.4s forwards;
`