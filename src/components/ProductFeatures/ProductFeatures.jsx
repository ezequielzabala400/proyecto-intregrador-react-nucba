import React, { useEffect, useState } from 'react'
import { BtnAddCart, ProductBottom, ProductDesc, ProductFeaturesContainer, ProductImg, ProductInfo, ProductIngredientsList, ProductName } from './ProductFeaturesStyles'
import { Navigate, useParams } from 'react-router'
import { productsList } from '../../data/products';
import {motion} from 'framer-motion'
import '../../styles/animations.css'
const ProductFeatures = () => {

    const data = useParams();
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const productFinded = productsList.find(product => product.name === data.nombre)
        setProduct(productFinded);
    }, [])

  return (
    <>
        {product && <ProductFeaturesContainer>
        <ProductImg>
            <img src={product.image} alt={product.name} />
        </ProductImg>
        <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <ProductDesc>
                {product.desc}
            </ProductDesc>
            <ProductIngredientsList>
                <h3>Ingredientes: </h3>
                <ul>
                {product.ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>))}
                </ul>
            </ProductIngredientsList>
            <ProductBottom>
                <p>Precio: ${product.price}</p>
                <motion.div whileTap={{scale: 0.95}}>
                    <BtnAddCart>Agregar</BtnAddCart>
                </motion.div>
            </ProductBottom>
        </ProductInfo>
    </ProductFeaturesContainer>}
    </>
  )
}

export default ProductFeatures