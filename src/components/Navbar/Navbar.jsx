import React, { useState } from 'react'
import { CartBuble, LoginLink, LoginLinkMobile, NavbarCartIcon, NavbarList, NavbarListItem, NavbarLogo, NavbarMenuIcon, NavbarWrapper, Overlay, UserName, UserNameMobile } from './NavbarStyles'
import {FaShoppingCart, FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../../../public/assets/logo.jpeg'
import '../../styles/animations.css'
import { useDispatch, useSelector } from 'react-redux'
import { showMenu } from '../../redux/slices/toggleMenuSlice'
import ModalCart from '../ModalCart/ModalCart'
import { showCart } from '../../redux/slices/cartProductsSlice'
import { useNavigate } from 'react-router'
const Navbar = () => {

  const navbarMenu = useSelector(state => state.toggleMenu.hidden);
  const cartProduct = useSelector(state => state.cart.cartItems);
  const userState = useSelector(state => state.user.loggedIn);
  const userName = useSelector(state => state.user.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showModalCart = () => {
    if(userState === false){
      navigate('/iniciar-sesion');
      return;
    }else{
      dispatch(showCart());
    }
  }

  const totalProducts = () => {
    return cartProduct.reduce((acc,cur) => acc += cur.quantity,0)
  }

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
          <li><NavbarListItem to={'/juegos'}>Juegos</NavbarListItem></li>
          <li><NavbarListItem to={'/sobre-nosotros'}>Sobre Nosotros</NavbarListItem></li>
          <li><NavbarListItem to={'/contacto'}>Contacto</NavbarListItem></li>
          {userState
          ? <UserNameMobile>{userName.user}</UserNameMobile>
          : <LoginLinkMobile to={'/iniciar-sesion'}>Iniciar sesión</LoginLinkMobile>}
        </NavbarList>


        <NavbarCartIcon>
            <div style={{display: 'flex', position: 'relative'}}>
              {cartProduct.length > 0 && <CartBuble>{totalProducts()}</CartBuble>}
              <FaShoppingCart onClick={() => showModalCart()}/>
            </div>
            <ModalCart />
            {userState 
            ? <UserName>
              <h4>{userName.user}</h4>
            </UserName> 
            : <LoginLink to={'/iniciar-sesion'} >Iniciar Sesión</LoginLink>}
        </NavbarCartIcon>
    </NavbarWrapper>

    <Overlay toggle={navbarMenu} onClick={() => dispatch(showMenu(navbarMenu))}/>
    </>
  )
}

export default Navbar