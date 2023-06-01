import React from 'react'
import { HomeBtnContainer, HomeContainer, HomeContent, HomeImageDesktop, HomeImageMobile, HomeSubTitle, HomeTitle } from './HomeStyles'
import LogoMobile from '../../../public/assets/logo-home-mobile.png'
import LogoDesktop from '../../../public/assets/logo-home2.png'
import Button from '../../components/UI/Button/Button'
import {motion} from 'framer-motion'
import '../../styles/animations.css'
import { useNavigate } from 'react-router'
const Home = () => {

    const navigate = useNavigate();

  return (
    <HomeContainer>

        <HomeImageMobile>
            <img src={LogoMobile} alt="Logo Mobile" />
        </HomeImageMobile>

        <HomeImageDesktop>
            <img src={LogoDesktop} alt="Logo Desktop" />
        </HomeImageDesktop>
        
        <HomeContent>
            <HomeTitle>GameHub</HomeTitle>
            <HomeSubTitle>
                "Tu destino de juegos, 
                sin importar la plataforma"
            </HomeSubTitle>
            <HomeBtnContainer>
                <motion.div whileTap={{scale: 0.90}} onClick={() => navigate('/juegos')}>
                    <Button>Ver Productos</Button>
                </motion.div>
            </HomeBtnContainer>
        </HomeContent>
    </HomeContainer>
  )
}

export default Home