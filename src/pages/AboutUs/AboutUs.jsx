import React from 'react'
import { AboutUsText, AboutUsWrapper } from './AboutUsStyles'
import AboutUsImgMobile from '../../../public/assets/about-us-mobile.png'
import '../../styles/animations.css'
import background from '../../../public/assets/about-us-desktop.png'
const AboutUs = () => {
  return (
    <AboutUsWrapper background={background}>
        <h2>Sobre Nosotros</h2>
        <AboutUsText>
        En <span>GameHub</span>, somos apasionados por los videojuegos y estamos comprometidos a brindar a los jugadores una <span>experiencia excepcional</span> en el mundo del entretenimiento digital. 
        Somos un ecommerce especializado en la venta de videojuegos para <span>diferentes plataformas</span>, desde consolas de última generación hasta PC
        </AboutUsText>
        <img src={AboutUsImgMobile} alt="AboutUs-Img-Mobile" />
        <AboutUsText>
        Nuestro objetivo es proporcionar a nuestros clientes una <span>amplia selección</span> de juegos de <span>alta calidad</span>, desde los éxitos más populares hasta los títulos indie más innovadores. 
        <span>Trabajamos en estrecha colaboración con desarrolladores y distribuidores de renombre</span> para asegurarnos de que nuestro catálogo esté siempre <span>actualizado y lleno de opciones emocionantes</span> para satisfacer todos los gustos y preferencias.
        </AboutUsText>
        <img src={AboutUsImgMobile} alt="AboutUs-Img-Mobile" />
        <AboutUsText>
        En GameHub, nuestra pasión por los videojuegos impulsa cada aspecto de nuestro negocio. Estamos comprometidos con la <span>excelencia</span>, la <span>innovación</span> y el <span>servicio excepcional</span>. 
        Únete a nosotros en nuestra misión de proporcionar diversión y emoción a todos los jugadores, sin importar la plataforma que elijan. <span>¡Bienvenido a GameHub, tu destino definitivo para los mejores videojuegos!</span>
        </AboutUsText>
    </AboutUsWrapper>
  )
}

export default AboutUs