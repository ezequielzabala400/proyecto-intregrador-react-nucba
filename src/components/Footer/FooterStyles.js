import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const FooterWrapper = styled.footer`
    width: 100%;
    background-color: var(--Gray);
`

export const FooterContainer = styled.div`
    padding: 26px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--Gray);

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        max-width: 1200px;
        margin: auto;
        padding: 50px 26px;
    }
`

export const FooterSocialMediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;


    h3{
        font-size: 1.8rem;
        font-family: var(--Dancing-Script);
        @media (min-width: 768px) {
            font-size: 2.4rem;
        }
    }

`

export const FooterSocialIcons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    gap: 6px;
    @media (min-width: 768px) {
        flex-direction: row;
        font-size: 2.2rem;
        gap: 10px;
    }
    a{
        color: var(--White);
        &:hover{
            color: var(--Red);
        }
    }
`

export const FooterNavbarList = styled.ul`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-family: var(--Poppins);
    list-style: none;
    
    @media (min-width: 768px) {
        margin-top: unset;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        width: 300px;
    }
`

export const FooterNavbarLink = styled(Link)`
        font-size: 1.4rem;
        color: var(--White);
        &:hover{
            color: var(--Red);
        }
        @media (min-width: 768px){
            font-size: 1.7rem;
        }
`

export const FooterCopyright = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    @media (min-width: 768px) {
        margin-top: unset;
        font-size: 1.4rem;
    }

    img{
        height: 60px;
        border-radius: 50px;
    }

    p{
        color: var(--Copyright);
        font-family: var(--Lora);
    }
`