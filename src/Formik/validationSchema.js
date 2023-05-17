import * as Yup from 'yup';

export const ContactValidationSchema = Yup.object({
    name: Yup.string().required('*Campo requerido'),
    surname: Yup.string().required('*Campo requerido'),
    email: Yup.string().email('*Email inválido').required('*Campo requerido'),
    subject: Yup.string().required('*Campo requerido'),
    message: Yup.string().required('*Campo requerido')
})