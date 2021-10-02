import {Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routes from '../helpers/routes';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserPlus, faSignInAlt} from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
    return (
        <Container>
            <Row className="mt-5">
                <Col xs={{span: 12}} md={{span: 6}} className="mb-5">
                    <h2>Bienvenid@ a Gestor de Tareas</h2>
                    <p>¡Aquí podrás gestionar tus proyectos!</p>
                    <p>
                        Agrega, actualiza, marca tus tareas como terminadas o eliminalas.
                    </p>
                    <div>
                        <Link className="text-black" to={routes.login}><FontAwesomeIcon icon={faSignInAlt} />  Ingresa</Link> o <Button as={Link} to={routes.register} className="ml-1 btn btn-success "><FontAwesomeIcon icon={faUserPlus} /> Crea una cuenta</Button>
                    </div>
                </Col>
                <Col>
                    <img 
                        className="img-fluid"
                        src="/img/task-manager.svg"
                        alt="Gestor de tareas"
                    />
                    <p>¡Gestiona tu tiempo, mejora tu proactividad!</p>
                </Col>
            </Row>
        </Container>
    )
}
