import React, { useState } from 'react'
import { NavbarCartIcon, NavbarList, NavbarListItem, NavbarLogo, NavbarMenuIcon, NavbarWrapper, Overlay } from './NavbarStyles'
import {FaShoppingCart, FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../../../public/assets/logo-nav.svg'
import '../../styles/animations.css'
import { useDispatch, useSelector } from 'react-redux'
import { showMenu } from '../../redux/slices/toggleMenuSlice'
const Navbar = () => {

  const navbarMenu = useSelector(state => state.toggleMenu.hidden);
  const dispatch = useDispatch();

  return (
    <>
    <NavbarWrapper>
        <NavbarMenuIcon onClick={() => dispatch(showMenu())}>
            {navbarMenu ? <FaBars /> : <FaTimes />}
        </NavbarMenuIcon>
        <NavbarLogo>
            <img src={Logo} alt="Logo" />
        </NavbarLogo>

        <NavbarList toggle={navbarMenu}>
          <li><NavbarListItem to={'/'}>Inicio</NavbarListItem></li>
          <li><NavbarListItem to={'/cocteles'}>cócteles</NavbarListItem></li>
          <li><NavbarListItem to={'/sobre-nosotros'}>Sobre Nosotros</NavbarListItem></li>
          <li><NavbarListItem to={'/contacto'}>Contacto</NavbarListItem></li>
        </NavbarList>


        <NavbarCartIcon>
            <FaShoppingCart />
            <p>Iniciar Sesión</p>
        </NavbarCartIcon>
    </NavbarWrapper>

    <Overlay toggle={navbarMenu} onClick={() => dispatch(showMenu(navbarMenu))}/>
    </>
  )
}

export default Navbar