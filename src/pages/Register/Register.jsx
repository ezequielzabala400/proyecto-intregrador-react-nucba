import React from 'react'
import { LoginLink, LoginText, RegisterBtn, RegisterForm, RegisterWrapper } from './RegisterStyles'
import { Formik } from 'formik'
import { InputsContainer } from '../Login/LoginStyles'
import Input from '../../components/UI/Input-login-register/Input'
import { RegisterInitialValues } from '../../Formik/initialValues'
import { RegisterValidationSchema } from '../../Formik/validationSchema'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../redux/slices/userSlice'
import { useNavigate } from 'react-router'

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <RegisterWrapper>
      <Formik
      initialValues={RegisterInitialValues}
      validationSchema={RegisterValidationSchema}
      onSubmit={(values, {resetForm}) => {
        resetForm();
        dispatch(registerUser(values));
        navigate('/iniciar-sesion');
      }}
      >
        {({touched, errors}) => (
          <RegisterForm>
          <h3>Registrarse</h3>
          <InputsContainer style={{gap: '30px'}}>
            <Input type={'text'} name={'user'} label={'Usuario'} isErrors={touched.user && errors.user} />
            <Input type={'email'} name={'email'} label={'Correo'} isErrors={touched.email && errors.email} />
            <Input type={'password'} name={'password'} label={'Contraseña'} isErrors={touched.password && errors.password} />
          </InputsContainer>
          <RegisterBtn>Registrarse</RegisterBtn>
          <LoginText>Ya tenes una cuenta? <LoginLink to={'/iniciar-sesion'}>Inicia sesión aquí</LoginLink> </LoginText>
        </RegisterForm>
        )}
      </Formik>
    </RegisterWrapper>
  )
}

export default Register