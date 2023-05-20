import React from 'react'
import { ArrowImage, SelectInputContainer, SelectInputField } from './SelectInputStyles'
import {FaArrowDown} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { filterCategory, showProducts } from '../../../redux/slices/productsSlice'
const SelectInput = () => {

  const dispatch = useDispatch();

  const filterProducts = (e) => {
    if(e.target.value === '') return
    if(e.target.value === 'all'){
      dispatch(showProducts());
      return;
    }
    dispatch(filterCategory(e.target.value))
  }

  return (
    <SelectInputContainer>
        <ArrowImage>
            <FaArrowDown />
        </ArrowImage>
        <SelectInputField onChange={filterProducts}>
            <option selected disabled>Categorías</option>
            <option value="all">Todos</option>
            <option value="popular">Populares</option>
            <option value="classic">Clasicos</option>
            <option value="recommended">Recomendaciones</option>
            <option value="low-high">Precio Bajo-Alto</option>
            <option value="high-low">Precio Alto-Bajo</option>
        </SelectInputField>
    </SelectInputContainer>
  )
}

export default SelectInput