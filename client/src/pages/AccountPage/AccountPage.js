import {Container, Row, Col, Card, Button} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import useAuth from '../../auth/useAuth';
import useModal from '../../hooks/useModal';
import ChangePasswordModal from './components/ChangePasswordModal';
import DeleteModal from './components/DeleteModal';
import EditModal from './components/EditModal';
import ProfilePicModal from './components/ProfilePicModal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUserEdit, faUserLock, faTrash } from '@fortawesome/free-solid-svg-icons';




export default function AccountPage() {
    const {user} = useAuth();


    const [isOpenDeleteModal, openDeleteModal, closeDeleteModal] = useModal();
    const [isOpenChangePasswordModal, openChangePasswordModal, closeChangePasswordModal] = useModal();
    const [isOpenEditModal, openEditModal, closeEditModal] = useModal();
    const [isOpenProfilePicModal, openProfilePicModal, closeProfilePicModal] = useModal();

    return (
        <>
        <Container>
            <Row className="mt-4">  
                <Col xs={{span: 12}} className="text-center">
                    <img 
                        src={user?.profilePic || "/img/male_avatar.svg"}
                        alt="Perfil"
                        style={{
                            width: '200px',
                            heigth: '200px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            cursor: 'pointer'
                        }}
                        onClick={openProfilePicModal}
                    />
                </Col>
                <Col className="mt-4">
                    <Card className=" mx-auto p-4" style={{maxWidth: '360px'}}>  
                        <p className="text-center"><b>Nombre:</b> {user.name}</p>
                        <p className="text-center"><b>Apellido:</b> {user.lastname}</p>
                        <p className="text-center"><b>Correo Electrónico:</b> {user.email}</p>
                        <p className="text-center"><b>Rol:</b> {user.role}</p>

                        <Button className="text-white" variant="info" onClick={openEditModal}><FontAwesomeIcon icon={faUserEdit}/> Editar Cuenta</Button>
                        <Button  variant="warning" className="mt-3 text-white" onClick={openChangePasswordModal}><FontAwesomeIcon icon={faUserLock}/> Cambiar Contraseña</Button>
                        <Button variant="danger" className="mt-3" onClick={openDeleteModal}><FontAwesomeIcon icon={faTrash}/> Borrar Cuenta</Button>
                        
                    </Card>
                </Col>
            </Row>
        </Container>
        <DeleteModal 
            isOpen={isOpenDeleteModal}
            close={closeDeleteModal}
        />
        <ChangePasswordModal 
            isOpen={isOpenChangePasswordModal}
            close={closeChangePasswordModal}
        />
        <EditModal 
            isOpen={isOpenEditModal}
            close={closeEditModal}
            user={user}
        />
        <ProfilePicModal 
            isOpen={isOpenProfilePicModal}
            close={closeProfilePicModal}
            user={user}
        />
        </>
    )
}
