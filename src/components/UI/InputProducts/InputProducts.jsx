import React from 'react'
import { FindImage, InputContainer, InputProductField } from './InputProductsStyles'
import {FaSearch} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { searchProduct } from '../../../redux/slices/productsSlice'
const InputProducts = () => {

  const dispatch = useDispatch();

  const searchProductFunc = (e) => {
    dispatch(searchProduct(e.target.value.trim()))
  }

  return (
    <InputContainer>
        <FindImage htmlFor='searchProducts' >
            <FaSearch />
        </FindImage>
        <InputProductField type='text' placeholder='Buscar...' id='searchProducts' onChange={searchProductFunc}/>
    </InputContainer>
  )
}

export default InputProducts