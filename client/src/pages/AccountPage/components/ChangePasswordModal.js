import { useEffect } from 'react'
import {Modal, Form, Button, Alert} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import changePasswordResolver from '../../../validations/changePasswordResolver';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserLock} from '@fortawesome/free-solid-svg-icons';

export default function ChangePasswordModal({isOpen, close}) {
    const {register, handleSubmit, formState: {errors}, reset} = useForm({resolver: changePasswordResolver});


    const onSubmit = (formData) => {
        alert("Se cambio la clave")
    }

    useEffect(()=>{
        if(!isOpen){
            reset()
        }
    }, [isOpen, reset])
    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title><FontAwesomeIcon icon={faUserLock} /> Cambiar Contraseña</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form onSubmit={handleSubmit(onSubmit)}>
                   {errors?.password &&(
                        <Form.Text>
                            <Alert variant="danger" >
                                {/* Error en el campo contraseña */}
                                {errors.password.message}
                            </Alert>
                        </Form.Text>
                        )}
                   <Form.Group>
                       <Form.Label>Nueva contraseña:</Form.Label>
                       <Form.Control 
                            placeholder="Escriba la nueva contraseña" 
                            type="password"
                            {...register("password")}
                            />
                        {/* <Form.Text>
                            <Alert variant="danger" className="mt-1">
                                Error en el campo contraseña
                            </Alert>
                        </Form.Text> */}
                   </Form.Group>
               </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleSubmit(onSubmit)}>Actualizar Contraseña</Button>
                <Button variant="secondary" onClick={close}>Cancelar</Button>
            </Modal.Footer>

        </Modal>
    )
}
