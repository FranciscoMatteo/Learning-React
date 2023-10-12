/** CLASE 1

* ? ¿Que es React?

* * Es una libreria de Javascript que va a permitir crear apps, interfaces mejores y optimizadas


* ? ¿Cuando Nace?

* * Mayo del 2013 en las oficinas de facebook para optimizarlo ya que en sus inicios era muy lento face


* ? ¿Cuales son sus ventajas?

* * 1) Crear aplicaciones webs muchos mas rapidas. Gracias a la tecnica del Virtual DOM que me permite actualizar algunas 
partes de mi aplicacion sin recargar toda la pagina.

* * 2) Basado en componentes: son conjuntos de elementos que cumplen una funcion especifica (ejemplo ed boton).

* * 3) Tiene un enfoque DECLARATIVO.

* ?¿Que significa DECLARATIVO? Es un estilo de programacion en donde nos enfocamos en lo que se quiere lograr y no tanto en el como.

* * Enfoque IMPERATIVO: Estilo de progamacion en donde se detalla paso a paso las acciones a realizar para lograr un resultado especifico.


* ! Ejemplo en codigo;

* ! EJEMPLO A: Queremos crear un array de numeros pares entre el 0 y el 10.

* ? ¿Como lo podriamos resolver con el engoque IMPERATIVO:
**/

const array = [];

for(let i = 0; i <= 10; i++) {
    if( i % 2 == 0) {
        array.push(i);
    }
}

console.log(array);

// ¿Como lo podriamos resolver con el engoque DECLARATIVO:

const numeros = [0,1,2,3,4,5,6,7,8,9,10];

const pares = numeros.filter(numero => numero % 2 == 0);

console.log(pares);



/*
EXPRESIONES EN JS:

Es una combinacion de valores, variables y operadores que puede ser evaluados para 
producir un resultado

EJEMPLOS:
*/

let numero = 5;

let suma = numero + 5;




/*
FUNCIONES EN JS:

Es un bloque de instrucciones, para q sea una funcion debe poderse usar
en otras partes del proyecto

pueden ser DECLARADAS o EXPRESADAS

EJEMPLO:
*/

// FUNCION DECLARADA:
function sumamos (numeroUno, numeroDos) {
    //Cuerpo de la funcion
    return numeroUno + numeroDos;
}

console.log(sumamos(50,10));
// ¿Una funcion declarada se puede invocar antes de su declaracion?
// SI PERO ES MALA PRACTICA, funciona porque ele motor de JS las lee antes de ejecutar
// el codigo, y esto se conoce como hoisting.



//FUNCION EXPRESADA: Son aquellas que se asignan a una variable

//Funcion anonima:

const sumaDos = function(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

console.log(sumaDos(80,10));


//FUNCION FLECHA:
//Es una version resumida de la funcion anonima.

const sumaTres = (numeroUno, numeroDos) => numeroUno + numeroDos;

console.log(sumaTres(90,10));

// Y si no tenemos parametros? Podemos colocar los parentesis vacios.

const sumaCuatro = () => 10 + 10;

console.log(sumaCuatro());



// Trabajamos por modulos:
//Es una forma de dividir nuestro trabajo o codigo en partes mas pequeñas.

//Lo logramos utilizando las palabras "export" e "import". 















