import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    password: yup
                .string("La contrseña puede contener letras y numeros")
                .required("Debes ingresar una contraseña")
                .min(6, "La contraseña debe tener al menos 6 carácteres")
})

export default yupResolver(schema)