import { useEffect, useState } from 'react'
import { BaseColaboradores } from './BaseColaboradores'
import Listado from './assets/components/Listado'
import Formulario from './assets/components/Formulario'

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)

  const handleFormSubmit = (newColaborador) => {
    setColaboradores((prevColaboradores) => [
      ...prevColaboradores,
      newColaborador
    ])
  }

  return (
    <>
      <Listado data={colaboradores}/>
      <Formulario onFormSubmit={handleFormSubmit}/>
    </>
  )
}

export default App
