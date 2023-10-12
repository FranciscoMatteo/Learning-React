import React from 'react'
import Mensaje from './componentes/Mensaje'

/**
 * 
 * ! Componentes
 *  * Conjunto de elementos que cumplen la misma funcion en la interfaz del usuario
 * 
 * ! Caracteristicas:
 *  * - Renderizan un unico elemento
 *  * - Pueden enviar props
 */


const App = () => {
  return (

    <>
      <h1>Hola Mundo</h1>
      <Mensaje saludo="Holis, primer after" dia="Viernes"/>
    </>
  )
}

export default App