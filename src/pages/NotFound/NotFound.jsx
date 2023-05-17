import React from 'react'
import NotFoundImg from '../../../public/assets/not-found.png'
import { NotFoundWrapper } from './NotFoundStyles'
import '../../styles/animations.css'
const NotFound = () => {
  return (
    <NotFoundWrapper>
        <img src={NotFoundImg} alt="Not-Found-img" />
        <h2>404 Not Found</h2>
    </NotFoundWrapper>
  )
}

export default NotFound