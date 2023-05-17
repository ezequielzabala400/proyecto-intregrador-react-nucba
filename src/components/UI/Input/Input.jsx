import React from 'react'
import { InputContainer, InputError, InputField, InputLabel } from './InputStyles'
import { ErrorMessage, Field } from 'formik'

const Input = ({ type, label, small, name, isErrors }) => {
  return (
    <InputContainer small={small ? true : undefined}>
        <InputLabel>{label}</InputLabel>
        <Field 
        name={name}
        type={type}
        as={InputField}
        isErrors={isErrors}
        />
        <ErrorMessage name={name} component={InputError}/>
    </InputContainer>
  )
}

export default Input