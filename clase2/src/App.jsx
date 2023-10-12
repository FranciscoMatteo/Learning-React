import React from 'react'
import TituloPrincipal from './components/Titulo-Principal/TituloPrincipal';
import Boton from './components/Boton/Boton';
import ItemCount from './components/ItemCount/ItemCount';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

// JSX es una extension de JS.

/**
* ! El componente principal de mi aplicacion es el componente App

* ! Componentes 1:
* ! Definicion: Conjunto de elementos que cumplen una funcion especifica en la interfaz del usuario

* ! Ventajas de trabajar con componentes:
* *- Reutilizamos codigo.
* *- Favorece la separacion de responsabilidades.
* *- El codigo se vuelve mas facil de entender. 
* *- Mejora el rendimiento de la aplicacion!.


* ! Caracteristicas principales de los elementos:
* *- Renderizar un unico elemento.
* *- Pueden recibir props (propiedades).

* *- Pueden tener un estado.

* ? ¿Que son las props?
* * Las props son objetes que contienen datos que un componente necesita para renderizarse correctamente
* * Estas se envian de forma unidireccional de un componente padre a un componente hijo.

* * Las props nos ayudan a que con la creacion de un solo componente, como se ve abajo "titulo principal"
* * Podamos usarlo en varias paginas sin necesidad de crear otro componente, las props me deja modificarlo

* ? ¿Que es el estado?
* * El estado es un objeto que contiene informacion del componente que puede cambiar durante la ejecucion de la aplicacion.

**/

const App = () => {
  // La parte superior de la funcion la vamos a utilizar 
  // para toda la logica que esta detras del componente.

  return (
    // El retorno se codea luego del return, se usan fragments vacios para no estar lleno de divs
    <>

    <NavBar/>
    <ItemListContainer greeting = "Hola usuario =)"/>



      {/*<TituloPrincipal saludo="Hola Mundo"/>
      <TituloPrincipal saludo="Hola Marte"/>
      <hr />
      <Boton texto="Agregar al carrito"/>
      <Boton texto="Comprar"/>
      <hr />
      <ItemCount/>
      */}
    </>
  )
}

export default App