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
            <option value="Estrategia">Estrategia</option>
            <option value="Cooperativos">Cooperativos</option>
            <option value="Deportes">Deportes</option>
            <option value="Accion">Accion</option>
            <option value="Multijugador">Multijugador</option>
            <option value="Un jugador">Un jugador</option>
            <option value="Mundo abierto">Mundo abierto</option>
            <option value="Vr">Vr</option>
            <option value="Terror">Terror</option>
            <option value="Supervivencia">Supervivencia</option>
            <option value="Drama">Drama</option>
            <option value="Primera persona">Primera persona</option>
            <option value="Sigilo">Sigilo</option>
            <option value="Rol">Rol</option>
            <option value="Humor negro">Humor negro</option>
            <option value="Ciencia ficcion">Ciencia ficcion</option>
            <option value="Indie">Indie</option>
            <option value="Puzles">Puzles</option>
            <option value="Superheroes">Superheroes</option>
            <option value="Artes marciales">Artes marciales</option>
            <option value="low-high">Precio Bajo-Alto</option>
            <option value="high-low">Precio Alto-Bajo</option>
        </SelectInputField>
    </SelectInputContainer>
  )
}

export default SelectInput