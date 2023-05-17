import React from 'react'
import { FindImage, InputContainer, InputProductField } from './InputProductsStyles'
import {FaSearch} from 'react-icons/fa'
const InputProducts = () => {
  return (
    <InputContainer>
        <FindImage htmlFor='searchProducts' >
            <FaSearch />
        </FindImage>
        <InputProductField type='text' placeholder='Buscar...' id='searchProducts'/>
    </InputContainer>
  )
}

export default InputProducts