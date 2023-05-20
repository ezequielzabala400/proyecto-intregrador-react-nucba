import React from 'react'
import { ProductWrapper } from './ProductStyles'
import { Outlet } from 'react-router'

const Product = () => {
  return (
    <ProductWrapper>
        <Outlet />
    </ProductWrapper>
  )
}

export default Product