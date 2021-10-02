import {Navbar, Nav, NavDropdown, NavbarBrand} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import {NavLink} from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routes from '../helpers/routes'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCircle, faUserPlus, faProjectDiagram, faSignInAlt, faSignOutAlt, faUsers, faTasks} from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
    const {isLogged, hasRole, logout} = useAuth();

    // console.log(hasRole('admin'))
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" >
            <NavbarBrand as={NavLink} to={routes.home} className="prueba">
            <FontAwesomeIcon icon={faTasks} />  Gestor de Tareas
            </NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to={routes.projects}><FontAwesomeIcon icon={faProjectDiagram} /> Proyectos</Nav.Link>
                    <NavDropdown title="Admin" hidden={!hasRole('admin')} > 
                        <NavDropdown.Item as={NavLink} to={routes.admin.users}><FontAwesomeIcon icon={faUsers} /> Usuarios</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to={routes.login} hidden={isLogged()}><FontAwesomeIcon icon={faSignInAlt} /> Iniciar Sesion</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.register} hidden={isLogged()}><FontAwesomeIcon icon={faUserPlus} /> Registrarse</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.account} hidden={!isLogged()}><FontAwesomeIcon icon={faUserCircle} /> Mi Cuenta</Nav.Link>
                    <Nav.Link  to={routes.logout} onClick={logout} hidden={!isLogged()}><FontAwesomeIcon icon={faSignOutAlt} /> Cerrar Sesion</Nav.Link>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    )
}
