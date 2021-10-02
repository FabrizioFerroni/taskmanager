import {Container, Row, Col, Card, Form, Alert} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSignInAlt, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import EditResolver from "../validations/EditResolver";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import routes from "../helpers/routes";
export default function RegisterPage() {
    const {register, formState: {errors}} = useForm({resolver: EditResolver});
    return (
        <>
        <Container>
            <Row className="mt-9"> 
                <Col>
                    <Card className=" mx-auto p-4" style={{maxWidth: '360px'}}> 
                        <h2 className="text-center">Registrarse</h2>
                        <Form>
                        {errors?.password &&(
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
                                        placeholder="Escriba el nombre" 
                                        type="text"
                                        className="mb-4"
                                        autoComplete="off"
                                        {...register("name")}
                                        />
                            </Form.Group>

                            {errors?.password &&(
                                    <Form.Text>
                                        <Alert variant="danger" >
                                            {/* Error en el campo contraseña */}
                                            {errors.lastname.message}
                                        </Alert>
                                    </Form.Text>
                                    )}
                            <Form.Group>
                                <Form.Label>Apellido:</Form.Label>
                                <Form.Control 
                                        placeholder="Escriba el apellido" 
                                        type="text"
                                        className="mb-4"
                                        autoComplete="off"
                                        {...register("lastname")}
                                        />
                            </Form.Group>

                            {errors?.password &&(
                                    <Form.Text>
                                        <Alert variant="danger" >
                                            {/* Error en el campo contraseña */}
                                            {errors.email.message}
                                        </Alert>
                                    </Form.Text>
                                    )}
                            <Form.Group>
                                <Form.Label>Correo Electrónico:</Form.Label>
                                <Form.Control 
                                        placeholder="Escriba el correo electrónico" 
                                        type="email"
                                        className="mb-4"
                                        autoComplete="off"
                                        {...register("email")}
                                        />
                            </Form.Group>

                            {errors?.password &&(
                                    <Form.Text>
                                        <Alert variant="danger" >
                                            {/* Error en el campo contraseña */}
                                            {errors.password.message}
                                        </Alert>
                                    </Form.Text>
                                    )}
                            <Form.Group>
                                <Form.Label>Contraseña:</Form.Label>
                                <Form.Control 
                                        placeholder="Escriba la contraseña" 
                                        type="password"
                                        className="mb-4"
                                        autoComplete="off"
                                        {...register("password")}
                                        />
                            </Form.Group>
                            <button className="btn btn-success"><FontAwesomeIcon icon={faUserPlus} />  Registrarse</button>
                        </Form>
                        
                    </Card>
                    <p className="mt-2 text-center">¿Ya tienes una cuenta? <Link className="text-danger" to={routes.login}><FontAwesomeIcon icon={faSignInAlt} />  Iniciar Sesión</Link> </p>
                </Col>
            </Row>
        </Container>
        </>
    )
}
