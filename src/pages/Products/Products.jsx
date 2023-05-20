import React, { useEffect } from 'react'
import { ButtonsContainer, FilterProductsSection, NotFoundProducts, ProductsContainer, ProductsWrapper } from './ProductsStyles'
import InputProducts from '../../components/UI/InputProducts/InputProducts'
import SelectInput from '../../components/UI/SelectInput/SelectInput'
import ProductsCard from '../../components/ProductsCard/ProductsCard'
import '../../styles/animations.css'
import { useDispatch, useSelector } from 'react-redux'
import { showLess, showMore, showProducts } from '../../redux/slices/productsSlice'
import ButtonShow from '../../components/UI/ButtonShow/ButtonShow'
import { productsList } from '../../data/products'
import { TOTAL_PRODUCTS } from '../../utils/constants'

const Products = () => {

  const {products, total, showBtns} = useSelector(state => state.products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showProducts())
  },[total])

  return (
    <>
      <ProductsWrapper>
        <FilterProductsSection>
            <InputProducts />
            <SelectInput />
        </FilterProductsSection>

        <ProductsContainer>
            {
              products.map(product => (<ProductsCard key={product.name} {...product}/>))
            }
            {
              products.length === 0 && <NotFoundProducts>No hay productos con ese nombre</NotFoundProducts>
            }
        </ProductsContainer>
        <ButtonsContainer show={showBtns ? 'flex' : 'none'}>
          <ButtonShow 
          type={'less'}
          func={() => dispatch(showLess())}
          disabled={products.length === TOTAL_PRODUCTS ? true : false}
          >
            Mostrar Menos
            </ButtonShow>
          <ButtonShow 
          type={'more'}
          func={() => dispatch(showMore())}
          disabled={products.length === productsList.length ? true : false}
          >
            Mostrar Más
            </ButtonShow>
        </ButtonsContainer>
    </ProductsWrapper>
    </>
  )
}

export default Products