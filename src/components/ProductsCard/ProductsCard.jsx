import React from 'react'
import { CardContainer, CardImg, CardInfo, ProductBottom, ProductDescription, ProductTitle } from './ProductsCardStyles'
import ProductImg from '../../../public/assets/mojito.jpg'
import ProductBtn from '../UI/ProductButton/ProductBtn'
import {motion} from 'framer-motion'
const ProductsCard = () => {
  return (
    <CardContainer>
        <CardImg>
            <img src={ProductImg} alt="" />
        </CardImg>
        <CardInfo>
            <ProductTitle>Mojito</ProductTitle>
            <ProductDescription>
                Saborea la frescura del Mojito.
            </ProductDescription>
            <ProductBottom>
                <p>$1000</p>
                <motion.div whileTap={{scale: 0.90}}>
                    <ProductBtn>Ver</ProductBtn>
                </motion.div>
            </ProductBottom>
        </CardInfo>
    </CardContainer>
  )
}

export default ProductsCard