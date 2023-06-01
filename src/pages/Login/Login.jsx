import { Formik } from 'formik'
import React from 'react'
import { ButtonLogin, Divider, InputsContainer, LoginBtn, LoginBtns, LoginForm, LoginWrapper, RegisterLink, RegisterText } from './LoginStyles'
import Input from '../../components/UI/Input-login-register/Input'
import XboxLogo from '../../../public/assets/xbox-logo.png'
import PlaystationLogo from '../../../public/assets/playstation-logo.png'
import '../../styles/animations.css'
import { LoginInitialValues } from '../../Formik/initialValues'
import { LoginValidationSchema } from '../../Formik/validationSchema'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/slices/userSlice'
import { useNavigate } from 'react-router'
const Login = () => {

    const userData = useSelector(state => state.user.userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <LoginWrapper>
        <Formik
        initialValues={LoginInitialValues}
        validationSchema={LoginValidationSchema}
        onSubmit={(values, {resetForm}) => {
            resetForm();
            if(userData.user === values.user && userData.password === values.password){
                dispatch(loginUser());
                navigate('/juegos');
            }
        }}
        >
       {({errors, touched}) => (
         <LoginForm>
         <h3>Iniciar Sesión</h3>
         <InputsContainer>
             <Input type={'text'} name={'user'} label={'Usuario'} isErrors={errors.user && touched.user}/>
             <Input type={'password'} name={'password'} label={'Contraseña'} login isErrors={errors.password && touched.password}/>
         </InputsContainer>
         <ButtonLogin>Iniciar</ButtonLogin>
         <Divider />
         <LoginBtns>
             <LoginBtn type='playstation' whileTap={{scale: 0.95}}>
                 <img src={PlaystationLogo} alt="playstation" />
                 <p>Playstation</p>
             </LoginBtn>
             <LoginBtn type='xbox' whileTap={{scale: 0.95}}>
                 <img src={XboxLogo} alt="xbox" />
                 <p>Xbox</p>
             </LoginBtn>
         </LoginBtns>
         <RegisterText>No tenes una cuenta? <RegisterLink to={'/registro'}>Registrate aquí</RegisterLink></RegisterText>
     </LoginForm>
       )}
    </Formik>
    </LoginWrapper>
  )
}

export default Login