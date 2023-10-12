import React from 'react'

const Mensaje = ({saludo, dia, numero}) => {
  return (
    <div>

        <h3>{saludo}</h3>
        <h3>{dia}</h3>

    </div>
  )
}

export default Mensaje