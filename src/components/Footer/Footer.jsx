import React from 'react'
import { FooterContainer, FooterCopyright, FooterNavbarList, FooterSocialIcons, FooterSocialMediaContainer, FooterWrapper } from './FooterStyles'
import {FaFacebook,FaInstagram,FaPinterest,FaTwitter,FaYoutube} from 'react-icons/fa'
import LogoGlassIcon from '../../../public/assets/logo-glass.svg'
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
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Política de privacidad</a></li>
            </FooterNavbarList>

            <FooterCopyright>
                <img src={LogoGlassIcon} alt="Logo Glass Icon" />
                <p>&#169;UnTragoMas Copyright 2023</p>
            </FooterCopyright>
        </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer