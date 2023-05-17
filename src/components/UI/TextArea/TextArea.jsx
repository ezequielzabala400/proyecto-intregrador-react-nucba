import React from 'react'
import { TextAreaContainer, TextAreaError, TextAreaField, TextAreaLabel } from './TextAreaStyles'
import { ErrorMessage, Field } from 'formik'

const TextArea = ({ name, isErrors }) => {
  return (
    <TextAreaContainer>
        <TextAreaLabel>Mensaje</TextAreaLabel>
        <Field 
        name={name}
        as={TextAreaField}
        isErrors={isErrors}
        />
        <ErrorMessage name={name} component={TextAreaError}/>
    </TextAreaContainer>
  )
}

export default TextArea