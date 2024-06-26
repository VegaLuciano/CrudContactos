import { Modal, ModalHeader, ModalBody, FormGroup, Label, Input, Form, ModalFooter, Button} from "reactstrap"
import { useState, useRef, useEffect } from "react"

const modeloContacto = {
    idContacto: 0,
    nombre: "",
    correo:"",
    telefono:""
}

const ModalContacto = ({mostrarModal, setMostrarModal, guardarContacto, editar, setEditar, editarContacto }) =>
{
    const inputRef = useRef(null);
    const [contacto, setContacto] = useState(modeloContacto)

    const actualizarDato = (e) =>
    {
        setContacto(
            {
                ...contacto,
                [e.target.name] : e.target.value
            }
        )
    }

    const enviarDatos = () =>{
        if(contacto.idContacto == 0){
            guardarContacto(contacto)
        } else {
            editarContacto(contacto)
        }
        setContacto(modeloContacto)
    }

    useEffect(() => {
        if (editar != null) {
            setContacto(editar)
        } else {
           setContacto(modeloContacto)
        }
    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                
                {contacto.idContacto == 0 ? "NuevoContacto" : "Editar Contacto"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizarDato(e)} value={contacto.nombre} innerRef={inputRef} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Correo</Label>
                        <Input name="correo" onChange={(e) => actualizarDato(e)} value={contacto.correo} innerRef={inputRef} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Telefono</Label>
                        <Input name="telefono" onChange={(e) => actualizarDato(e)} value={contacto.telefono} innerRef={inputRef} />
                    </FormGroup>
                </Form> 
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal   }>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )

}

export default ModalContacto;