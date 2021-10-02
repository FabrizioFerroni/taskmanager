import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import roles from '../helpers/roles';

const schema = yup.object().shape({
    name: yup
                .string("El campo nombre debe contener palabras")
                .required("Debes ingresar un nombre")
                .min(4, "El nombre debe tener como minimo 4 digitos"),
    lastname: yup
                .string("El campo apellido debe contener palabras")
                .required("Debes ingresar un apellido")
                .min(4, "El nombre debe tener como minimo 4 digitos"),
    email: yup 
            .string("El campo correo electronico debe contener un mail")
            .required("Debes ingresar un correo electronico"),
    role: yup
            .string("El rol debe ser un texto")
            .oneOf(Object.keys(roles), "El rol no es valido, por favor elije otro"),
})

export default yupResolver(schema)