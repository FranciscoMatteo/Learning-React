import React from 'react'

/**
 * PROGRAMACION SINCRONICO Y ASINCRONICA:
 * 
 * La programacion sincronica ejecuta una tarea a la vez, en orden secuencial. cada proceso es bloqueante del siguiente
 * 
 * La programacion asincronica ejecuta varias tareas al mismo tiempo, en orden
 * 
 * PARA PRACTICAR PODEMOS USAR setTimeout. RECUERDEN QUE RECIBE DOS PARAMETROS: UNA FUNCION Y UN TIEMPO EN MS
 * 
 * * PROMESAS: Un objeto que representa un eveneto futuro
 * * Es el tesultado de una de alguna peticion asincrona
 * 
 * Las promesas tienen 3 estados: pendiente, cumplida o rechazada.
 * 
 */

const Promesas = () => {

  // PROGRAMACION SINCRONA:

  console.log("Tarea1");
  console.log("Tarea2");

  //PROGRAMACION ASCINRONA 

  setTimeout(() => {
    console.log("TareaA");
  }, 3000);

  setTimeout(() => {
    console.log("TareaB");
  }, 1500);

  // PROMESAS

  const falsasPromesas = (estado) => {
    return new Promise((resolve, reject) => {
      if (estado) {
        resolve("Promesa cumplida");
      } else {
        reject("Promeza rechazada");
      }
    })
  }

  console.log(falsasPromesas(true));

  // THEN Y CATCH 
  // Se pueden concatenar dos metodos que me permiten ejecutar una funcion cuando la promesa se cumple o se rechaza
  //THEN Se ejecuta cuando la promesa se cumple
  //CATCH Se ejecuta cuando la promesa se rechaza
  //FINALLY se ejecuta siempre

  falsasPromesas(false)
    .then((respuesta) => {
      console.log("Si si se cumpliop" + respuesta);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => console.log("Proceso terminado"))

  return (
    <div>

    </div>
  )
}

export default Promesas