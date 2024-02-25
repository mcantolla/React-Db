import { Table, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

function Listado({data, onDelete}) {

    return (
      <>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Edad</th>
                <th>Cargo</th>
                <th>Telefono</th>
                </tr>
            </thead>
            <tbody>
            {data.map((colaborador) => (
                    <tr key={colaborador.id}>
                        <td>{colaborador.nombre}</td>
                        <td>{colaborador.correo}</td>
                        <td>{colaborador.edad}</td>
                        <td>{colaborador.cargo}</td>
                        <td>{colaborador.telefono}</td>
                        <td>
                          <Button onClick={() => onDelete(colaborador.id)} variant="danger">Borrar</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
      </>
    )
  }
  
  export default Listado 