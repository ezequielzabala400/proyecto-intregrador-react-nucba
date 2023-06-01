import React from 'react'
import { CardContainer, CardImg, CardInfo, ProductBottom, ProductDescription, ProductTitle } from './ProductsCardStyles'
import ProductBtn from '../UI/ProductButton/ProductBtn'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router'
import { formatPrice } from '../../utils/functions'


const ProductsCard = ({name, image, price, sub}) => {

    const navigate = useNavigate()

  return (
    <CardContainer>
        <CardImg>
            <img src={image} alt={name} />
        </CardImg>
        <CardInfo>
            <ProductTitle>{name}</ProductTitle>
            <ProductDescription>
                {sub}
            </ProductDescription>
            <ProductBottom>
                <p>${formatPrice(price)}</p>
                <motion.div whileTap={{scale: 0.90}} onClick={() => navigate(`/juego/${name}`)}>
                    <ProductBtn>Ver</ProductBtn>
                </motion.div>
            </ProductBottom>
        </CardInfo>
    </CardContainer>
  )
}

export default ProductsCard