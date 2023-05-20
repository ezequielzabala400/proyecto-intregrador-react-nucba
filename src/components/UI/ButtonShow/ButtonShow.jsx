import React from 'react'
import { Button } from './ButtonShowStyles'
import {motion} from 'framer-motion'

const ButtonShow = ({ children, func, type, disabled }) => {
  return (
    <motion.div whileTap={!disabled && {scale: 0.90}}>
        <Button 
        onClick={func} 
        type={type}
        disabled={disabled}
        >
            {children}
        </Button>
    </motion.div>
  )
}

export default ButtonShow