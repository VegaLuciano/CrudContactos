import './App.css';
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';
import { useEffect, useState } from 'react'
import TablaContacto from './Componentes/TablaContacto';
import ModalContacto from './Componentes/ModalContacto';

const App = () => {

    const [contactos, setContactos] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false)
    const [editar, setEditar] = useState(null)

    const mostrarContactos = async () => {
        try {
            const response = await fetch("http://localhost:5098/api/Contacto/Lista");

            if (!response.ok) {
                throw new Error("Error al obtener la lista de contactos");
            }

            const data = await response.json();
            setContactos(data);
        } catch (error) {
            console.error("Error:", error.message);
        }
    }

    useEffect(() => {
        mostrarContactos()
    }, [])

    const guardarContacto = async (contacto) => {
        const response = await fetch("http://localhost:5098/api/Contacto/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(contacto)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal)
            mostrarContactos()
        }
    }

    const editarContacto = async (contacto) => {
        const response = await fetch("http://localhost:5098/api/Contacto/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(contacto)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal)
            mostrarContactos()
        }
    }

    const eliminarContacto = async (id) => {

        var respuesta = await window.confirm("Desea eliminar el contacto?")

        if (!respuesta) {
            return
        }

        const response = await fetch("http://localhost:5098/api/Contacto/Eliminar/" + id, {
            method: 'DELETE'
        })

        if (response.ok) {
            mostrarContactos()
        }
    }





    return (
        <Container fluid className="app-container">
            <Row className='mt-5'>
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista De Contactos</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success" onClick={() => { console.log('Mostrar modal'); setMostrarModal(!mostrarModal); }}>Nuevo contacto</Button>
                            <hr />
                            <TablaContacto data={contactos}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}
                                eliminarContacto={eliminarContacto}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <ModalContacto
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarContacto={guardarContacto}
                editar={editar}
                setEditar={setEditar}
                editarContacto={editarContacto}
            />
        </Container>
    );
}

export default App;
