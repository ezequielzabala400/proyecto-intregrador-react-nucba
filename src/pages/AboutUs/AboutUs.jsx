import React from 'react'
import { AboutUsText, AboutUsWrapper } from './AboutUsStyles'
import AboutUsImgMobile from '../../../public/assets/about-us-mobile.svg'
import '../../styles/animations.css'
import background from '../../../public/assets/about-us-desktop.png'
const AboutUs = () => {
  return (
    <AboutUsWrapper background={background}>
        <h2>Sobre Nosotros</h2>
        <AboutUsText>
        Un Trago Más es la tienda de cócteles que te invita a descubrir una <span>experiencia única</span> y <span>sofisticada</span> en el mundo de la mixología. 
        En nuestro <span>exclusivo</span> establecimiento, encontrarás una <span>amplia selección</span> de cócteles artesanales cuidadosamente elaborados 
        con los <span>mejores ingredientes</span>.
        </AboutUsText>
        <img src={AboutUsImgMobile} alt="AboutUs-Img-Mobile" />
        <AboutUsText>
        En Un Trago Más, nos esforzamos por crear cócteles que <span>deleiten</span> y <span>sorprendan</span> a nuestros clientes. Nuestro compromiso con la <span>calidad </span>
        se refleja en cada detalle, desde la selección de los licores y destilados más <span>refinados</span> hasta la presentación <span>impecable</span> de cada bebida.
        </AboutUsText>
        <img src={AboutUsImgMobile} alt="AboutUs-Img-Mobile" />
        <AboutUsText>
        En Un Trago Más, la <span>pasión</span> por los cócteles se une a la <span>excelencia</span> en cada sorbo. Permítenos llevarte en un <span>viaje de sabores </span>
        inolvidables y descubrir por qué un trago más <span>nunca es suficiente</span>.
        </AboutUsText>
    </AboutUsWrapper>
  )
}

export default AboutUs