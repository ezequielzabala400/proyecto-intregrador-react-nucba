import React from 'react'
import { ArrowImage, SelectInputContainer, SelectInputField } from './SelectInputStyles'
import {FaArrowDown} from 'react-icons/fa'
const SelectInput = () => {
  return (
    <SelectInputContainer>
        <ArrowImage>
            <FaArrowDown />
        </ArrowImage>
        <SelectInputField>
            <option value="">Categorías</option>
            <option value="popular">Populares</option>
            <option value="classic">Clasicos</option>
            <option value="recomended">Recomendaciones</option>
            <option value="low-high">Precio Bajo-Alto</option>
            <option value="high-low">Precio Alto-Bajo</option>
        </SelectInputField>
    </SelectInputContainer>
  )
}

export default SelectInput