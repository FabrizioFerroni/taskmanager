import { useEffect } from 'react'
import {Modal, Form, Button, Alert} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import useAuth from '../../../auth/useAuth';
import roles from '../../../helpers/roles';
import EditResolver from '../../../validations/EditResolver';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserEdit} from '@fortawesome/free-solid-svg-icons';

export default function EditModal({isOpen, close, user}) {
    const {register, handleSubmit, formState: {errors, dirtyFields}, reset} = useForm({resolver: EditResolver});
    const {updateUser, hasRole} = useAuth();


    const isDirty = !!Object.keys(dirtyFields).length;
    const onSubmit = (formData) => {
        if(!isDirty) return;
        let newUserData;
        if(formData.role){
            newUserData = formData;
        }else{
            const{role, ...resFormData} = formData;
            newUserData = resFormData
        }
        updateUser(newUserData)
        // alert("Se edito el usuario")
        close()
    }

    useEffect(()=>{
        if(!isOpen){
            reset()
        }
    }, [isOpen, reset])

    useEffect(() =>{
        if(user) reset({
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            role: user.role
        })
    }, [user, reset])
    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title><FontAwesomeIcon icon={faUserEdit} /> Editar Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form onSubmit={handleSubmit(onSubmit)}>
                   {/* Nombre */}
                   {errors?.name &&(
                        <Form.Text>
                            <Alert variant="danger" >
                                {/* Error en el campo contraseña */}
                                {errors.name.message}
                            </Alert>
                        </Form.Text>
                        )}
                   <Form.Group>
                       <Form.Label>Nombre:</Form.Label>
                       <Form.Control 
                            placeholder="Escriba su nombre" 
                            type="text"
                            autoComplete="off"
                            {...register("name")}
                            className="mb-4"
                            />
                        {/* <Form.Text>
                            <Alert variant="danger" className="mt-1">
                                Error en el campo contraseña
                            </Alert>
                        </Form.Text> */}
                   </Form.Group>
                        {/* Apellido */}
                   {errors?.lastname &&(
                        <Form.Text>
                            <Alert  variant="danger" >
                                {/* Error en el campo contraseña */}
                                {errors.lastname.message}
                            </Alert>
                        </Form.Text>
                        )}
                   <Form.Group>
                       <Form.Label >Apellido:</Form.Label>
                       <Form.Control 
                            placeholder="Escriba su apellido" 
                            type="text"
                            autoComplete="off"
                            className="mb-4"
                            {...register("lastname")}
                            />
                        {/* <Form.Text>
                            <Alert variant="danger" className="mt-1">
                                Error en el campo contraseña
                            </Alert>
                        </Form.Text> */}
                   </Form.Group>
                        {/* Correo */}
                   {errors?.email &&(
                        <Form.Text>
                            <Alert variant="danger" >
                                {/* Error en el campo contraseña */}
                                {errors.email.message}
                            </Alert>
                        </Form.Text>
                        )}
                   <Form.Group>
                       <Form.Label >Correo Electrónico:</Form.Label>
                       <Form.Control 
                            placeholder="Escriba su correo electrónico" 
                            type="text"
                            autoComplete="off"
                            className="mb-4"
                            {...register("email")}
                            />
                        {/* <Form.Text>
                            <Alert variant="danger" className="mt-1">
                                Error en el campo contraseña
                            </Alert>
                        </Form.Text> */}
                   </Form.Group>
                    {/* Rol */}
                   {errors?.role &&(
                        <Form.Text>
                            <Alert variant="danger" >
                                {/* Error en el campo contraseña */}
                                {errors.role.message}
                            </Alert>
                        </Form.Text>
                        )}
                   <Form.Group>
                       <Form.Label hidden={!hasRole('admin')}>Rol:</Form.Label>
                       <Form.Control 
                            as="select"
                            autoComplete="off"
                            className="form-select mb-4"
                            hidden={!hasRole('admin')}
                            {...register("role")}
                            >
                                {/* <option>Administrador</option>
                                <option>Usuario Normal</option> */}
                                {Object.keys(roles).map(role => (
                                    <option key={role}>{role}</option>
                                ))}
                            </Form.Control>
                           
                        {/* <Form.Text>
                            <Alert variant="danger" className="mt-1">
                                Error en el campo contraseña
                            </Alert>
                        </Form.Text> */}
                   </Form.Group>
               </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleSubmit(onSubmit)}
                disabled={!isDirty}
                >Editar Usuario</Button>
                <Button variant="secondary" onClick={close}>Cancelar</Button>
            </Modal.Footer>

        </Modal>
    )
}
