import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario({onFormSubmit}) {

  const [alerta, setAlerta] = useState(false)
  const [mensajeAlerta, setMensajeAlerta] = useState("Rellena todos los campos")
  const [colorAlerta, setColorAlerta] = useState("danger")
  const [colaborador, setColaborador] = useState({
    id: 0,
    nombre: "",
    email: "",
    edad: 0,
    cargo: "",
    telefono: ""
  })

  const handleChange = (event) => {
    setColaborador({
      ...colaborador,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (
      colaborador.nombre.trim() == "" || 
      colaborador.email.trim() == "" || 
      colaborador.edad == 0 || 
      colaborador.cargo.trim() == "" || 
      colaborador.telefono.trim() == ""
      ) {
      setMensajeAlerta("Rellena todos los campos")
      setColorAlerta("danger")
      setAlerta(true)
      return
    } else {
      setMensajeAlerta("Registrado con exito")
      setColorAlerta("success")
      setAlerta(true)
    }

    onFormSubmit(colaborador)
    
    setColaborador((prevColaboradores) => ({
      id: prevColaboradores.length+1,
      nombre: "",
      email: "",
      edad: 0,
      cargo: "",
      telefono: ""
    }))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Agregar colaborador</Form.Label>
        <Form.Control type="text" name="nombre" value={colaborador.nombre} onChange={handleChange} placeholder="Nombre del colaborador" />
        <Form.Control type="text" name="email" value={colaborador.email} onChange={handleChange} placeholder="Email del colaborador" />
        <Form.Control type="number" name="edad" value={colaborador.edad} onChange={handleChange} placeholder="Edad del colaborador" />
        <Form.Control type="text" name="cargo" value={colaborador.cargo} onChange={handleChange} placeholder="Cargo del colaborador" />
        <Form.Control type="number" name="telefono" value={colaborador.telefono} onChange={handleChange} placeholder="Telefono del colaborador" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Agregar colaborador
      </Button>
    </Form>
  );
}

export default Formulario;
  