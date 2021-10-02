import React from 'react'
import {Modal, Alert, Button} from 'react-bootstrap'
import useAuth from '../../../auth/useAuth'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons';

export default function DeleteModal({isOpen, close}) {
    const {logout} = useAuth();
    const handleDelete = () => {
        // Peticion http
        logout();
    }
    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title><FontAwesomeIcon icon={faTrash} /> Eliminar Cuenta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant="danger">
                    ¿Estas seguro que deseas eliminar permanentemente tu cuenta? <b>Se perderan tus datos.</b>
                </Alert>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleDelete}>Eliminar mi cuenta</Button>
                <Button variant="secondary" onClick={close}>Cancelar</Button>
            </Modal.Footer>

        </Modal>
    )
}
