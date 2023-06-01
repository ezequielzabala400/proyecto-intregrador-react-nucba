import React from 'react'
import { BtnsContainer, BuyBtn, Divider, ModalContainer, ModalWrapper, ProductsContainer, TotalPrice } from './ModalCartStyles'
import CartProduct from '../CartProduct/CartProduct'
import { useDispatch, useSelector } from 'react-redux'
import { confirmBuyBtn, emptyCartAlert, formatPrice } from '../../utils/functions'
import { buyProducts } from '../../redux/slices/cartProductsSlice'

const ModalCart = () => {

  const products = useSelector(state => state.cart.cartItems);
  const cartModal = useSelector(state => state.cart.cartHidden);
  const total = useSelector(state => state.cart.total); 
  const dispatch = useDispatch();

  const confirmBuy = async () => {
    if(products.length === 0){
      emptyCartAlert();
      return;
    }

    const confirm = await confirmBuyBtn();
    
    confirm && dispatch(buyProducts());
  }

  return (
    <ModalWrapper>
        <ModalContainer show={cartModal}>
            <ProductsContainer>
                {
                  products.length !== 0 
                  ? products.map(product => <CartProduct key={product.name} {...product}/>)
                  : <p>No hay productos</p> 
                }
                
            </ProductsContainer>
            <Divider />
            <BtnsContainer>
              <TotalPrice>
                <h4>Total:</h4>
                <span>${formatPrice(total)}</span>
              </TotalPrice>
              <BuyBtn onClick={() => confirmBuy()}>Comprar</BuyBtn>
            </BtnsContainer>
        </ModalContainer>
    </ModalWrapper>
  )
}

export default ModalCart