import React from 'react'
import { ProductContainer, ProductImage, ProductInfo, ProductQuantityBtn, ProductQuantityContainer, TrashIconContainer } from './CartProductStytles'
import {FaMinus, FaPlus, FaTrash} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, increaseTotal, removeProduct } from '../../redux/slices/cartProductsSlice'
const CartProduct = ({image, name, quantity}) => {

    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cart.cartItems)

    const handleDeleteProduct = () => {
        dispatch(removeProduct(name))
        dispatch(increaseTotal(cartList))
    }

    const handlePlusBtn = () => {
        dispatch(increaseQuantity(name));
        dispatch(increaseTotal(cartList))
    }
    const handleMinusBtn = () => {
        dispatch(decreaseQuantity(name));
        dispatch(increaseTotal(cartList))
    }

  return (
    <ProductContainer>
        <TrashIconContainer>
            <FaTrash  onClick={() => handleDeleteProduct()}/>
        </TrashIconContainer>
        <ProductImage>
            <img src={image} alt={name} />
        </ProductImage>
        <ProductInfo>
            <h3>{name}</h3>
            <ProductQuantityContainer>
                <ProductQuantityBtn>
                    <FaMinus onClick={() => handleMinusBtn()} />
                </ProductQuantityBtn>
                <span>{quantity}</span>
                <ProductQuantityBtn>
                    <FaPlus onClick={() => handlePlusBtn()} />
                </ProductQuantityBtn>
            </ProductQuantityContainer>
        </ProductInfo>
    </ProductContainer>
  )
}

export default CartProduct