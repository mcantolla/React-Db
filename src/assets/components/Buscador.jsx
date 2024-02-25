import { useState } from "react";

function Buscador({data, onDataChange}) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    const filteredData = data.filter((colaborador) => 
      colaborador.nombre.toLowerCase().includes(search.toLowerCase())
  )
  onDataChange(filteredData)
  }
  


    return (
      <>
      <input type="text" placeholder="Buscador" value={search} onChange={handleSearchChange}></input>
      </>
    )
  }
  
  export default Buscador