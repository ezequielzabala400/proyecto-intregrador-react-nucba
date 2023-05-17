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
            <option value="">asd</option>
        </SelectInputField>
    </SelectInputContainer>
  )
}

export default SelectInput