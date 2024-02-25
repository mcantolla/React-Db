import { Alert } from "react-bootstrap"

function Alerta(props) {
    return (
      <>
      <Alert
        variant={props.color}
        key={props.mensaje}
        >
          <p>{props.mensaje}</p>
      </Alert>
      </>
    )
  }
  
  export default Alerta