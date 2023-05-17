import { NavLink } from "react-router-dom";
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
    border-bottom: 1px solid var(--Green);
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
    }
`

export const NavbarList = styled.ul`
    position: absolute;
    top: 70px;
    left: 0;
    padding: 26px;
    height: calc(100vh - 70px);
    background-color: var(--Black);
    display: ${({toggle}) => toggle ? 'flex' : 'none'};
    flex-direction: column;
    border-right: 1px solid var(--Green);
    border-bottom: 1px solid var(--Green);
    border-bottom-right-radius: 30px;
    gap: 30px;
    animation: slide-right 0.4s;
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
            color: var(--Green);
        }
    &.active{
            color: var(--Green);
        }
`

export const NavbarCartIcon = styled.div`
    font-size: 2.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--White);
    p{
        display: none;
        font-size: 1.4rem;
        font-family: var(--Lora);
        @media (min-width: 768px) {
            display: flex;
        }
    }
`

export const Overlay = styled.div`
    display: ${({toggle}) => toggle ? 'flex' : 'none'};
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