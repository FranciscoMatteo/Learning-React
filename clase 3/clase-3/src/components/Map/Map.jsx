import React from 'react'

// Metodo MAP:
// En react se utizila para crear una lista de componentes a partir de un array de datos

const Map = () => {

    const productos = [
        {id:1, nombre:"pc gamer", precio:1000},
        {id:2, nombre:"teclado gamer", precio:100},
        {id:3, nombre:"mouse gamer", precio:200},
        {id:4, nombre:"silla gamer", precio:500},
    ]

  return (
    <div>
        <h2>Productos Gamers:</h2>
        <ul>
            {productos.map((producto) => (
                <li key={producto.id}>
                    <span> {producto.nombre} </span>
                    <span> ${producto.precio} </span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Map