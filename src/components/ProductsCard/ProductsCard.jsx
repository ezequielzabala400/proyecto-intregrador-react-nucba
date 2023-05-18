import React from 'react'
import { CardContainer, CardImg, CardInfo, ProductBottom, ProductDescription, ProductTitle } from './ProductsCardStyles'
import ProductBtn from '../UI/ProductButton/ProductBtn'
import {motion} from 'framer-motion'


const ProductsCard = ({name, image, desc, price}) => {
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
                <motion.div whileTap={{scale: 0.90}}>
                    <ProductBtn>Ver</ProductBtn>
                </motion.div>
            </ProductBottom>
        </CardInfo>
    </CardContainer>
  )
}

export default ProductsCard