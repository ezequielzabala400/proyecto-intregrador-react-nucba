import React from 'react'
import { FilterProductsSection, NotFoundProducts, ProductsContainer, ProductsWrapper } from './ProductsStyles'
import InputProducts from '../../components/UI/InputProducts/InputProducts'
import SelectInput from '../../components/UI/SelectInput/SelectInput'
import ProductsCard from '../../components/ProductsCard/ProductsCard'
import '../../styles/animations.css'
import { useSelector } from 'react-redux'

const Products = () => {

  const products = useSelector(state => state.products.products)

  return (
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
    </ProductsWrapper>
  )
}

export default Products