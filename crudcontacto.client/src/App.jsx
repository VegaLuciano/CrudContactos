import './App.css';
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';
import { useEffect, useState } from 'react'
import TablaContacto from './Componentes/TablaContacto';

const App = () => {

    const [contactos, setContactos] = useState([])

    const mostrarContactos = async () => {
        const response = await fetch('http://localhost:5098/api/Contacto/Lista');

        if (response.ok) {
            const data = await response.json();
            setContactos(data);
        } else {
            console.log("error al mostrar la lista");
        }
    }

    useEffect(() => {
        mostrarContactos()
    }, [])

    return (
        <Container fluid className="app-container">
            <Row className='mt-5'>
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista De Contactos</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success">Nuevo contacto</Button>
                            <hr />
                            <TablaContacto data={contactos} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
