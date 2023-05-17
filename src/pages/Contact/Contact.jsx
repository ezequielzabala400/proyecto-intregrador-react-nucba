import React from 'react'
import { ButtonContainer, ContactContainer, ContactForm, InputsContainer } from './ContactStyles'
import Input from '../../components/UI/Input/Input'
import { ButtonSubmitItem } from '../../components/UI/ButtonSubmit/ButtonSubmitStyles'
import { Formik } from 'formik'
import TextArea from '../../components/UI/TextArea/TextArea'
import { ContactInitialValues } from '../../Formik/initialValues'
import { ContactValidationSchema } from '../../Formik/validationSchema'
import '../../styles/animations.css'

const Contact = () => {
  return (
    <ContactContainer>
        <Formik
        initialValues={ContactInitialValues}
        validationSchema={ContactValidationSchema}
        onSubmit={(values, {resetForm}) => {
            console.log(values);
            resetForm();
        }}
        >
            {({ touched, errors }) => (
                <ContactForm>
                <h2>Contacto</h2>
                <InputsContainer>
                    <Input name={'name'} type={'text'} label={'Nombre'} small isErrors={touched.name && errors.name}/>
                    <Input name={'surname'} type={'text'} label={'Apellido'} small isErrors={touched.surname && errors.surname}/>
                    <Input name={'email'} type={'email'} label={'Correo'} isErrors={touched.email && errors.email}/>
                    <Input name={'subject'} type={'text'} label={'Asunto'} isErrors={touched.subject && errors.subject}/>
                    <TextArea name={'message'}  isErrors={touched.message && errors.message}/>
                </InputsContainer>
                <ButtonContainer>
                    <ButtonSubmitItem>Enviar</ButtonSubmitItem>
                </ButtonContainer>
            </ContactForm>
            )}
        </Formik>
    </ContactContainer>
  )
}

export default Contact