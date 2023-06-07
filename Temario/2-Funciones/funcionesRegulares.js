/* 
Funciones 
Definicion:
Listado de procedimientos que se ejecutan cuando sea necesario 
 */

//Funcion Expresada
// es aquella que se asigna como valor a una variable

let sumar = function (numeroA, numeroB){
    return numeroA + numeroB;
}

sumar() //llamamos a la funcion que tendra los parametros para ejecutarse

// Funcion Declarada
// es aquella que recibe un nombre formal y no se asigna como valor a una variable

function restar(numeroC, numeroD){
    return numeroC - numeroD;
}

restar() //llamamos a la funcion que tendra los parametros para ejecutarse

// Ejemplo 

function elDoble(unNumero){
    return unNumero * 2;
}

console.log(elDoble(6)) //12


//Scope

// Scope local
// cuando existen variables declaradas exclusivamente dentro de una funcion.
// fuera de la funcion la variable es inexistente 

function hola(){
    //variable local
    let saludo = "Hola ¿qué tal?";
    return saludo;
}

console.log(hola());// Hola ¿qué tal?
console.log(saludo);// Undefined Variable

// Scope Global
// cuando las variables se declaran fuera de cualquier funcion. Teniendo asi un alcance a ellas en cualquier lugar del codigo , incluso dentro de las funciones.

let elMejorLenguaje = "Javascript, es lo más";
function estoyAprendiendo() {
    return elMejorLenguaje;
}

console.log(estoyAprendiendo());// "Javascript, es lo más"
