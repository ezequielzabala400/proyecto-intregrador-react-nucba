import { styled } from "styled-components";

export const AboutUsWrapper = styled.section`
    min-height: 100vh;
    width: 100%;
    padding: 26px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 350px;
    animation: fade 0.4s;
    h2{
        font-size: 3rem;
        color: var(--Beige);
        text-align: center;
        font-family: var(--Dancing-Script);
    }
    img{
        width: 100%;
        height: 100px;
        object-fit: cover;
    }
    @media (min-width: 768px) {
        max-width: 600px;
        gap: 50px;
        h2{
            font-size: 4rem;
        }
        img{
            height: 120px;
        }
    }
    @media (min-width: 1024px) {
        padding-top: 120px;
        height: 800px;
        max-width: 1200px;
        background-image: url(${({background}) => background});
        background-repeat: no-repeat;
        background-size: 400px;
        background-position: right bottom;
        margin-bottom: 30px;
        h2{
            text-align: start;
        }
        img{
            display: none;
        }
    }
`

export const AboutUsText = styled.p`
    font-size: 1.2rem;
    color: var(--Beige);
    font-family: var(--Poppins);
    line-height: 18px;
    span{
        color: var(--Green);
        &:nth-child(odd){
            color: var(--Red);
        }
    }
    @media (min-width: 768px) {
        font-size: 1.8rem;
        line-height: 26px;
    }
    @media (min-width: 1024px){
        width: 600px;
    }
`

