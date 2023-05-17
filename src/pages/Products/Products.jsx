import React from 'react'
import { FilterProductsSection, ProductsContainer, ProductsWrapper } from './ProductsStyles'
import InputProducts from '../../components/UI/InputProducts/InputProducts'
import SelectInput from '../../components/UI/SelectInput/SelectInput'
import ProductsCard from '../../components/ProductsCard/ProductsCard'
import '../../styles/animations.css'

const Products = () => {
  return (
    <ProductsWrapper>
        <FilterProductsSection>
            <InputProducts />
            <SelectInput />
        </FilterProductsSection>

        <ProductsContainer>
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
        </ProductsContainer>
    </ProductsWrapper>
  )
}

export default Products