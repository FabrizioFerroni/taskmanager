import { useState } from 'react'
import {Modal, Form, Button} from 'react-bootstrap'
import {toast} from 'react-toastify'
import useAuth from '../../../auth/useAuth'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faImage} from '@fortawesome/free-solid-svg-icons';

export default function ProfilePicModal({isOpen, close}) {
    const {user, updateUser} = useAuth();
    const [fileName, setFileName] = useState("Subir una imagen");
    const [selectedFile, setSelectedFile] = useState(null);
    
    const handleFileChange = (e) => {
        const [file] = e.target.files;
        const SIZE_50MB = 50 * 1024 * 1024;
        const isValidSize = file.size < SIZE_50MB;
        const isNameOfOneImageRegEx = /.(jpe?g|gif|png)$/i;
        const isValidType = isNameOfOneImageRegEx.test(file.name)

        if(!isValidType) return toast.error("Solo se permiten subir archivos de formato de imagen");
        if(!isValidSize) return toast.error("La imagen es muy pesada, máximo 50MB");

        setFileName(file.name);
        setSelectedFile(file)
        const reader = new FileReader();
        reader.onloadend = () =>{
            setSelectedFile(reader.result)
            

        }
        reader.readAsDataURL(file);
        
    }

    const handleUpdateProfilePic = () =>{
        if(!selectedFile) return toast.warning('Debes seleccionar una nueva imagen');
        updateUser({profilePic: selectedFile})
        close()
        
    }

    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title><FontAwesomeIcon icon={faImage} /> Modificar Imagen de la Cuenta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control type="file" 
                            accept=".jpg, .jpeg, .gif, .png"
                            onChange={handleFileChange}
                            label={fileName}
                            />
                </Form>
                {/* <p className="mt-2">Previsualizacion de imagen</p> */}
                <img 
                    // src={user?.profilePic || selectedFile}
                    src={selectedFile}
                    alt="Profile Preview"
                    className="img-fluid mt-3"
                    style={{
                        borderRadius: '50%'
                    }}
                    hidden={!selectedFile}
                /> 
                <img 
                    src={user.profilePic}
                    alt='Foto actual de perfil'
                    className="img-fluid mt-3"
                    style={{
                        borderRadius: '50%'
                    }}
                    hidden={selectedFile}
                />
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleUpdateProfilePic}>Actualizar Imagen</Button>
                <Button variant="secondary" onClick={close}>Cancelar</Button>
            </Modal.Footer>

        </Modal>
    )
}
