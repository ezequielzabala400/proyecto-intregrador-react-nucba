import React from 'react'
import { HomeBtnContainer, HomeContainer, HomeContent, HomeImageDesktop, HomeImageMobile, HomeSubTitle, HomeTitle } from './HomeStyles'
import LogoMobile from '../../../public/assets/logo-glass.svg'
import LogoDesktop from '../../../public/assets/logo-home.png'
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
            <HomeTitle>Un trago más</HomeTitle>
            <HomeSubTitle>
                El sabor de la noche
                está en un trago más
            </HomeSubTitle>
            <HomeBtnContainer>
                <motion.div whileTap={{scale: 0.90}} onClick={() => navigate('/licores')}>
                    <Button>Ver Productos</Button>
                </motion.div>
            </HomeBtnContainer>
        </HomeContent>
    </HomeContainer>
  )
}

export default Home