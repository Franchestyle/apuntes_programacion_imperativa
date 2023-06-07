const prompt = require ("prompt-sync")({sigint:true});

//--------------------------------------------------------------------------//

// function ingreseFrase() {
//     let frase = prompt("ingrese una frase: ")
//     return frase;
// }

// console.log(ingreseFrase())

//--------------------------------------------------------------------------//

// function saludo() {
//     let nombre = prompt("Ingrese su nombre: ")
//     return "Hola " + nombre + "!"
// }

// console.log(saludo())

//--------------------------------------------------------------------------//

// function suma(a, b) {
//     let resultado = parseInt(a) + parseInt(b);
//     return resultado;
// }

// console.log(suma(prompt("Ingrese un numero para sumar: "), prompt("Ingrese un segundo numero para sumar: ")))

//--------------------------------------------------------------------------//

// function anioDeNacimiento(anioNac, anioActual ) {
//     let edad = parseInt(anioActual) - parseInt(anioNac);
//     if (edad <= 0) {
//         return "Ingrese fechas validas"
//     } else{
//         return "Tienes " + edad + " años"
//     }
// }

// console.log(anioDeNacimiento(prompt("Ingrese año de nacimiento: "), prompt("Ingrese el año acutal: ")))

//--------------------------------------------------------------------------//

// let humanNumber = prompt("Ingresa un numero para adivinar: ")

// let botNumber = Math.random();

// function comparador(numb1, numb2){
//     let a = parseInt(numb1)
//     let b = parseInt(numb2)

//     if(a === b){
//         console.log("Felicitaciones, ese era ♥")
//     } else {
//         console.log("Lo siento bb, el numero correcto era " + b + " :(")
//     }
   
// }

// comparador(humanNumber, botNumber)

//--------------------------------------------------------------------------//

// function contador (){
//     for(let vuelta = 2; vuelta <= 100; vuelta += 2){
//         console.log(vuelta)
//     }
// }

// contador()

//--------------------------------------------------------------------------//


// let nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];

// for (let i = 0; i < nombres.length; i++) {
//   console.log(this.nombres(i));
// }

//--------------------------------------------------------------------------//

// let numeroIngresado = prompt("ingrese un numero: ")

// function porcentaje(numero){
    
//     if(numero >= 500){
//         a = numero * 18;
//         porciento = a / 100;
//     }
//     return porciento
// }

// console.log(porcentaje(numeroIngresado))

//--------------------------------------------------------------------------//

// preguntar a rober porque tira undefined 
let nacionalidad = ['coreana', 'peruana', 'argentina', 'india']

function elemento(nac) {
    if (nac.length >= 3) {
        console.log(nac[2]);
    } else {
        console.log(-1);
    }
}

console.log(elemento(nacionalidad));

//--------------------------------------------------------------------------//

// let numeroIngresado = prompt('Ingrese numero hasta dos cifras: ');

// function cifras(numero) {
//     if (numero >= 0 && numero <= 9) {
//         return 10 - numero
//     } else if(numero >= 10 && numero <= 99) {
//         return 100 - numero 
//     }
// }

// console.log(cifras(numeroIngresado));

//--------------------------------------------------------------------------//

// function notas(a, b, c) {
//     let n = a + b + c 
//     let promedio = n / 3
//     return promedio
// }


// console.log(notas(7,2,5));

//--------------------------------------------------------------------------//

// function calcularSuma(numero) {
//     numero = prompt('Ingrese un numero natural: ');
//     for (let i = 0; i <= numero; i++) {
//         let = numero + i 
//     }
//     return numero + i 
// }

// console.log(calcularSuma(3));