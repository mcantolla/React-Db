import { useState } from 'react'
import { BaseColaboradores } from './BaseColaboradores'
import Listado from './assets/components/Listado'
import Formulario from './assets/components/Formulario'
import Buscador from './assets/components/Buscador'
import './App.css'

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)

  const handleFormSubmit = (newColaborador) => {
    setColaboradores((prevColaboradores) => [
      ...prevColaboradores,
      newColaborador
    ])
  }

  const handleChange = (newData) => {
    setColaboradores(newData)
  }

  const handleDelete = (id) => {
    const newData = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(newData)
  }

   return (
    <>
      <h1>Lista de colaboradores</h1>
      <Buscador data={colaboradores} onDataChange={handleChange} />
      <div className='wrapper'>
      <div className='listaWrapper'>
        <Listado data={colaboradores} onDelete={handleDelete}/>
      </div>
      <div className='formularioWrapper'>
        <Formulario onFormSubmit={handleFormSubmit}/>
      </div>
      </div>
    </>
  )
}

export default App
