import React from 'react'
import Articulos from './components/Articulos/Articulos'
import Contador from './components/Contador/Contador'
import Categorias from './components/Categorias/Categorias'
import Promesas from './components/Promesas/Promesas'
import Map from './components/Map/Map'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

/**
 * COMPONENTES 2
 * 
 * ? Recordemos ¿Que es un componentes?
 * * Conjunto de elementos que cumplen una misma funcion de la inferfaz del usuario 
 * 
 * * Tienen 3 caracteristicas:
 * 
 * * 1) Van a renderizar un unico elemento
 * * 2) Pueden pasar props.
 * 
 * 
 * * Las props son objetos, con informacion que le pasan los componentes padres a los compponentes hijos
 *  ! importante aclarar que el flujo de informacion es UNIDIRECCIONAL, solamente los padres le puede pasar info a los hijos.
 * 
 * ? ¿Que tipo de datos podemos pasar?
 * 
 * * - Datos primitivos (string, numbrer, boolean, null)
 * * - Objetos y arreglos (arrays)
 * * - Funciones
 * 
 * * y se suman ahora los CHILDREN.
 * 
 * * Los children es una forma de pasar otros componentes o elementos como props
 * 
 * 
 * 
 * * CICLO DE VIDA DE LOS COMPONENTES: es una serie de estados por los cuales pasa todo el componente a lo largo de su existencia.
 * 
 * * EJEMPLOS:::
 * 
 * * - Montaje (Ingresa al DOM)
 * * - Actualizacion ( Actualizo el valor del contador)
 * * - Desmontaje (cuando desaparece el contador y nos vamos al carrito)
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  
 * 
 */
const App = () => {
  return (
    <>
      {/*<Articulos
        img="https://imgs.search.brave.com/x0ej1GotxL5_2xTo8g3PaLJAWEQwIGgszo-2tnLOZ3U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmVlbGNhdHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzA3L3BlcnNhLWdh/dG8uanBn"
        titulo="Gato persa" />

      <Articulos
        img="https://imgs.search.brave.com/QNl9bb2AlkfGEGnFQT8CeYaz2r_O2L8fzqYcCvmA028/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzIyL0Zpb25hYXUu/anBn"
        titulo="Gato Siames" />

      <Articulos 
      img="https://imgs.search.brave.com/PuIx8gfRdy76u7M93m8hwnYwvpH3jnpjmpXRBMlynew/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWt5/bWEuY29tL2Jsb2cv/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDgvT3JpZ2VuLWRl/LWxhLXJhemEtZGUt/Z2F0by1TY290dGlz/aC1mb2xk.jpeg"
      titulo="Gato Scotish">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio saepe consectetur, 
          deserunt nihil laboriosam excepturi velit nam asperiores ea, quam dolor doloremque 
          tempora quisquam cum inventore iste cupiditate corrupti in.</p>
          <strong>Tiempo de lectura: 3 minutos</strong>
  </Articulos>*/}
      {/* <Contador/>
      <Categorias/>
      <Promesas/>
      <Map/> */}
      <ItemListContainer/>
    </>
  )
}

export default App