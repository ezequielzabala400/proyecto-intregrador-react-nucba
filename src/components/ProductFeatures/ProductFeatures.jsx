import React, { useEffect, useState } from 'react'
import { BtnAddCart, ProductBottom, ProductDesc, ProductFeaturesContainer, ProductImg, ProductInfo, ProductIngredientsList, ProductName } from './ProductFeaturesStyles'
import { Navigate, useNavigate, useParams } from 'react-router'
import { productsList } from '../../data/products';
import {motion} from 'framer-motion'
import '../../styles/animations.css'
import { formatPrice } from '../../utils/functions';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, increaseTotal } from '../../redux/slices/cartProductsSlice';
const ProductFeatures = () => {

    const data = useParams();
    const [product, setProduct] = useState(null)
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user.loggedIn);
    const navigate = useNavigate();

    useEffect(() => {
        const productFinded = productsList.find(product => product.name === data.nombre)
        setProduct(productFinded);
    }, [])

    const addProductCart = () => {
        if(userState === false){
            navigate('/iniciar-sesion');
            return;
        }else{
            dispatch(addProduct(product));
            dispatch(increaseTotal());
        }
    }

  return (
    <>
        {product && <ProductFeaturesContainer>
        <ProductImg>
            <img src={product?.image} alt={product?.name} />
        </ProductImg>
        <ProductInfo>
            <ProductName>{product?.name}</ProductName>
            <ProductDesc>
                {product?.desc}
            </ProductDesc>
            <ProductIngredientsList>
                <h3>ACERCA DE ESTE JUEGO </h3>
                <ul>
                {product.desc.map(item => (<li key={item}>{item}</li>))}
                </ul>
            </ProductIngredientsList>
            <ProductBottom>
                <p>Precio: ${formatPrice(product?.price)}</p>
                <motion.div whileTap={{scale: 0.95}} onClick={() => addProductCart()}>
                    <BtnAddCart>Agregar</BtnAddCart>
                </motion.div>
            </ProductBottom>
        </ProductInfo>
    </ProductFeaturesContainer>}
    </>
  )
}

export default ProductFeatures