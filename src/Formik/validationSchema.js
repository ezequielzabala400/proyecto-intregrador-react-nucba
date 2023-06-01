import * as Yup from 'yup';

export const ContactValidationSchema = Yup.object({
    name: Yup.string().required('*Campo requerido'),
    surname: Yup.string().required('*Campo requerido'),
    email: Yup.string().email('*Email inválido').required('*Campo requerido'),
    subject: Yup.string().required('*Campo requerido'),
    message: Yup.string().required('*Campo requerido')
});

export const RegisterValidationSchema = Yup.object({
    user: Yup.string().required('*Campo requerido').min(8, '*Mínimo de 8 carácteres'),
    email: Yup.string().email('*Correo inválido').required('*Campo requerido'),
    password: Yup.string().required('*Campo requerido').min(8, '*Mínimo de 8 carácteres').max(16, '*Máximo de 16 carácteres')
});

export const LoginValidationSchema = Yup.object({
    user: Yup.string().required('*Campo requerido'),
    password: Yup.string().required('*Campo requerido')
});