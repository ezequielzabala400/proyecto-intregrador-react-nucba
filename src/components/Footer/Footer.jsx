import React from 'react'
import { FooterContainer, FooterCopyright, FooterNavbarLink, FooterNavbarList, FooterSocialIcons, FooterSocialMediaContainer, FooterWrapper } from './FooterStyles'
import {FaFacebook,FaInstagram,FaPinterest,FaTwitter,FaYoutube} from 'react-icons/fa'
import LogoGlassIcon from '../../../public/assets/logo.jpeg'
const Footer = () => {
  return (
    <FooterWrapper>
        <FooterContainer>

            <FooterSocialMediaContainer>
                <h3>Redes Sociales</h3>
                <FooterSocialIcons>
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaPinterest /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaYoutube /></a>
                </FooterSocialIcons>
            </FooterSocialMediaContainer>

            <FooterNavbarList>
                <li><FooterNavbarLink to={'/'}>Inicio</FooterNavbarLink></li>
                <li><FooterNavbarLink to={'/cocteles'}>Productos</FooterNavbarLink></li>
                <li><FooterNavbarLink to={'/sobre-nosotros'}>Sobre Nosotros</FooterNavbarLink></li>
                <li><FooterNavbarLink to={'/contacto'}>Contacto</FooterNavbarLink></li>
                <li><FooterNavbarLink to={'/politica'}>Política de privacidad</FooterNavbarLink></li>
            </FooterNavbarList>

            <FooterCopyright>
                <img src={LogoGlassIcon} alt="Logo Glass Icon" />
                <p>&#169;GameHub Copyright 2023</p>
            </FooterCopyright>
        </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer