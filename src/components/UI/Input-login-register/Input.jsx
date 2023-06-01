import React from 'react'
import { ErrorMsg, ForgotPasswordLink, InputContainer, InputField, InputLabel } from './InputStyles'
import { ErrorMessage, Field } from 'formik'

const Input = ({ type, name, label, login, isErrors }) => {
  return (
    <InputContainer>
        <InputLabel>{label}</InputLabel>
        <Field 
        type={type}
        name={name}
        as={InputField}
        isErrors={isErrors}
        />
        <ErrorMessage name={name} component={ErrorMsg}></ErrorMessage>
        {login && (
          <ForgotPasswordLink>
            {type === 'password' && 'Olvidaste tu contraseña?'}
          </ForgotPasswordLink>
        )}
    </InputContainer>
  )
}

export default Input