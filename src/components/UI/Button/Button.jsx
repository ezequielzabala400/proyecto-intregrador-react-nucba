import React from 'react'
import { ButtonItem } from './ButtonStyles'

const Button = ({ children }) => {
  return (
    <ButtonItem>{children}</ButtonItem>
  )
}

export default Button