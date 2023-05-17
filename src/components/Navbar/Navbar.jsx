import React, { useState } from 'react'
import { NavbarCartIcon, NavbarList, NavbarListItem, NavbarLogo, NavbarMenuIcon, NavbarWrapper, Overlay } from './NavbarStyles'
import {FaShoppingCart, FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../../../public/assets/logo-nav.svg'
import '../../styles/animations.css'
const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <>
    <NavbarWrapper>
        <NavbarMenuIcon onClick={() => setToggle(!toggle)}>
            {toggle ? <FaTimes /> : <FaBars />}
        </NavbarMenuIcon>
        <NavbarLogo>
            <img src={Logo} alt="Logo" />
        </NavbarLogo>

        <NavbarList toggle={toggle}>
          <li><NavbarListItem to={'/'}>Inicio</NavbarListItem></li>
          <li><NavbarListItem to={'/licores'}>Licores</NavbarListItem></li>
          <li><NavbarListItem to={'/sobre-nosotros'}>Sobre Nosotros</NavbarListItem></li>
          <li><NavbarListItem to={'/contacto'}>Contacto</NavbarListItem></li>
        </NavbarList>


        <NavbarCartIcon>
            <FaShoppingCart />
            <p>Iniciar Sesión</p>
        </NavbarCartIcon>
    </NavbarWrapper>

    <Overlay toggle={toggle} onClick={() => setToggle(!toggle)}/>
    </>
  )
}

export default Navbar