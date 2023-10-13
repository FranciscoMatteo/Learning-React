import React from 'react'

const item = (id, nombre, precio, img) => {
  return (
    <div>
      <img src={img} alt={nombre} />
      <h3>Nombre: {nombre}</h3>
      <p>Precio: {precio}</p>
      <button>Ver detalles</button>

    </div>
  )
}

export default item