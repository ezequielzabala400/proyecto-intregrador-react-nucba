import React from 'react'
import { AboutUsText, AboutUsWrapper } from './AboutUsStyles'
import AboutUsImgMobile from '../../../public/assets/about-us-mobile.svg'
import '../../styles/animations.css'

const AboutUs = () => {
  return (
    <AboutUsWrapper>
        <h2>Sobre Nosotros</h2>
        <AboutUsText>
            <span>Un Trago Más</span> es una tienda especializada en bebidas alcohólicas que ofrece una <span>experiencia única</span> para 
            los amantes de los sabores, aromas y texturas de los licores más finos.
        </AboutUsText>
        <img src={AboutUsImgMobile} alt="AboutUs-Img-Mobile" />
        <AboutUsText>
            En nuestra tienda, podrás encontrar una amplia variedad de bebidas de <span>alta calidad</span>, desde los vinos 
            más exquisitos hasta las cervezas más <span>exclusivas</span>, pasando por una amplia selección de 
            licores y destilados de todo el mundo.
        </AboutUsText>
        <img src={AboutUsImgMobile} alt="AboutUs-Img-Mobile" />
        <AboutUsText>
            En resumen, en Un Trago Más te garantizamos que encontrarás la <span>bebida perfecta</span> para cada ocasión 
            y que te brindaremos una <span>experiencia</span> de compra <span>única</span> y <span>excepcional</span>.
        </AboutUsText>
    </AboutUsWrapper>
  )
}

export default AboutUs