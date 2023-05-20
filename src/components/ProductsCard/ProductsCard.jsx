import React from 'react'
import { CardContainer, CardImg, CardInfo, ProductBottom, ProductDescription, ProductTitle } from './ProductsCardStyles'
import ProductBtn from '../UI/ProductButton/ProductBtn'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router'


const ProductsCard = ({name, image, desc, price}) => {

    const navigate = useNavigate()

  return (
    <CardContainer>
        <CardImg>
            <img src={image} alt={name} />
        </CardImg>
        <CardInfo>
            <ProductTitle>{name}</ProductTitle>
            <ProductDescription>
                {desc}
            </ProductDescription>
            <ProductBottom>
                <p>${price}</p>
                <motion.div whileTap={{scale: 0.90}} onClick={() => navigate(`/coctel/${name}`)}>
                    <ProductBtn>Ver</ProductBtn>
                </motion.div>
            </ProductBottom>
        </CardInfo>
    </CardContainer>
  )
}

export default ProductsCard