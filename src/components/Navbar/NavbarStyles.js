import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const NavbarWrapper = styled.nav`
    position: fixed;
    top: 0;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    border-bottom: 1px solid var(--Red);
    background-color: var(--Black);
    z-index: 10;
    @media (min-width: 768px) {
        padding: 0 36px;
        position: unset;
        max-width: 1200px;
        margin: auto;
    }
`

export const NavbarMenuIcon = styled.div`
    font-size: 2.6rem;
    cursor: pointer;
    color: var(--White);
    @media (min-width: 768px) {
        display: none;
    }
`

export const NavbarLogo = styled.div`
    height: 40px;
    width: 40px;
    user-select: none;
    img{
        height: 100%;
        border-radius: 50px;
    }
`

export const NavbarList = styled.ul`
    position: absolute;
    top: 70px;
    left: 0;
    padding: 26px;
    height: calc(100vh - 70px);
    background-color: var(--Black);
    display: ${({toggle}) => toggle ? 'none' : 'flex'};
    flex-direction: column;
    border-right: 1px solid var(--Red);
    border-bottom: 1px solid var(--Red);
    border-bottom-right-radius: 30px;
    gap: 30px;
    animation: slide-right 0.4s;
    list-style: none;
    @media (min-width: 768px) {
        animation: none;
        display: flex;
        border: none;
        height: unset;
        flex-direction: row;
        position: unset;
        background-color: transparent;
    }
`

export const NavbarListItem = styled(NavLink)`
    color: var(--White);;
    font-size: 1.7rem;
    font-weight: 700;
    font-family: var(--Lora);
    &:hover{
            color: var(--Red);
        }
    &.active{
            color: var(--Red);
        }
`

export const NavbarCartIcon = styled.div`
    font-size: 2.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--White);
`

export const CartBuble = styled.div`
    position: absolute;
    right: -8px;
    bottom: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    height: 20px;
    width: 20px;
    font-size: 1.4rem;
    background-color: var(--Red);
    color: var(--White);
`

export const LoginLink = styled(Link)`
        display: none;
        font-size: 1.4rem;
        font-family: var(--Lora);
        color: var(--White);
        @media (min-width: 768px) {
            display: flex;
        }
`

export const LoginLinkMobile = styled(Link)`
    position: absolute;
    bottom: 50px;
    left: 40px;
    color: var(--White);
    font-size: 1.2rem;
    font-family: var(--Poppins);
    @media (min-width: 768px) {
            display: none;
    }

`

export const UserName = styled.div`
    position: relative;
    h4{
        display: none;
        font-size: 1.4rem;
        font-family: var(--Lora);
        color: var(--White);
        @media (min-width: 768px) {
            display: flex;
        }
    }
`

export const UserNameMobile = styled.div`
    position: absolute;
    bottom: 50px;
    left: 40px;
    width: 120px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: var(--White);
    font-size: 1.2rem;
    font-family: var(--Poppins);
    @media (min-width: 768px) {
            display: none;
    }
`

export const Overlay = styled.div`
    display: ${({toggle}) => toggle ? 'none' : 'flex'};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: var(--Overlay);
    filter: opacity(0.5);
    @media (min-width: 768px) {
        display: none;
    }
`