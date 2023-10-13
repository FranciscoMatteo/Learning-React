import { useState, useEffect } from "react"

/**
 * * 1) Voy a importar el useEffect
 * 
 * ? EL EFECTO PRIMARIO DE REACT ES RENDERIZAR COMPONENTES, MANIPULANDO EL DOM
 * 
 * *Una aplicacion web tiene que hacer mucho mas que solo mostrasrse, tiene que realizar operaciones, consumir datos de servidores y usar eventos
 * 
 * ! PARA PODER MANUPILAR LOS EFECTOS SECUNDARIOS DE LOS CAMBIOS DE ESTADO VAMOS A USAR UN NUEVO HOOK QUE SE LLAMA useEffect
 * 
 */

const Contador = () => {
    const [contador, setContador] = useState(1)


// Aca usamos el use effect para que modifique el title en base al nro del contador
    useEffect(() => {
        document.title= `Contador: ${contador}` ;
    }, [contador])

    // A useEffect le pasamos dos parametors, el primero es una funcion callback con el comportamiento deseado y
    // el segundo es un array de dependencias en donde colocamos el estado que queremos estar vigilando.
    // Cuando ese estado cambio se ejecuta nuevamente la funcion que pasamos en el primer argumento

    const sumarContador = () => {
        setContador(contador + 1);
    }

    const restarContador = () => {
        setContador(contador - 1);
    }

  return (
    <div>
        <button onClick={restarContador}> - </button>
        <strong> {contador} </strong>
        <button onClick={sumarContador}> + </button>

    </div>
  )
}

export default Contador