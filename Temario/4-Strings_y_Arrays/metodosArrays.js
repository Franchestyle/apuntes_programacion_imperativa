// metodos de Array
// .push()
// agrega uno o varios elementos al final del array
// Recibe uno o mas elementos como parametros
// Retorna la nueva longitud del array

let colores = ["Rojo", "Naranja", "Azul"];
colores.push("Violeta"); // retorna 4
console.log(colores); // ["Rojo", "Naranja", "Azul"]

// .pop()
// Elimina el ultimo elemento de un array
// No recibe parametros
// Devuelve el ultimo elemento eliminado

let series = ["Mad Men", "Breaking Bad", "The Sopranos"];

// creamos una variable para guardar lo que devuelve .pop()
let ultimaSerie = series.pop();

console.log(series);      // ["Mad men", "Breaking Bad"]
console.log(ultimaSerie); // ["The Sopranos"]

//.shift()
// Elimina el primer elemento de un array 
// no recibe parametros
// devuelve el elemento eliminado

let nombres = ["Frida", "Diego", "Sofia"];

// creamos una variable para guardar lo que devuelve .shift()
let primerNombre = nombres.shift()

console.log(nombres); // ["Diego","Sofia"]
console.log(primerNombre) // ["Frida"]

// .unshift()
// Agrega uno o varios elementos al principio de un array 
// recibe uno o mas elementos como parametros 
// retorna la nueva longitud del array

let marcas = ["Audi"]

marcas.unshift("Ford");
console.log(marcas); // ["Ford", "Audi"]

marcas.unshift("Ferrari", "BMW");
console.log(marcas); // ["Ferrari","BMW", "Ford", "Audi"]

// .join()
// Une los elementos de un array utilizando el separador que le especifiquemos, Si no lo especificamos, utiliza comas
// RECIBE un separador (string), es opcional
// RETORNA un string con los elementos unidos

let dias = ["Lunes", "Martes", "Jueves"];

let separadosPorComa = dias.join();
console.log(separadosPorComa); // ""