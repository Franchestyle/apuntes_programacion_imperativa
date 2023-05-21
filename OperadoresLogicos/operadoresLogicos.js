// Un operador es aquella porcion de codigo que nos permitira hacer operaciones artimeticas, comparaciones, concatenaciones, etc. 

// operador de asignacion " = "

let paisDeNacimiento = "PERÜ"

// operadores de suma " + ", resta " - ", multiplicacion " * " y division " / "

// operador aritmetico llamado "Modulo" que se implementa con el simbolo " % " y se encarga de retornar el resto o residuo de una division 

// operadores de incremento o decremento, el objetivo es poder sumar o restar una unidad a un numero determinado, para sumar  se utilizaria " ++ " y para restar " -- "

//EJEMPLOS

//SUMA

console.log( 5 + 4);

// RESTA

console.log( 10 - 6 );

//  MULTIPLICACION

console.log( 3 * 4 );

// DIVISION 

console.log( 10 / 2 );

// MODULO 

console.log( 10 % 2);

// INCREMENTO

let numero = 6;
console.log( ++numero ); // deberia valer 7

// DECREMENTO

let otroNumero = 10;
console.log( --otroNumero ); // deberia valer 9

// Operadores de comparacion

// Comparacion Simple " == " (Si un valor es igual a otro) 

5==7; // nos devolvera un dato Booleano "false"

// Comparacion Estricta " === " (Si un valor y el tipo de dato es igual a otro)

5==="5"; // como hay un 5 number y un 5 de tipo string devuelve "false"

// Desigualdad simple " != " (si un valor es distinto a otro)

5 != "5"; // como el valor es el mismo devuelve "false"

// Desigualdad Estricta " !== " (si el valor y el tipo de dato son distintos)

5 !== "5"; // el valor es el mismo, pero como el tipo de dato es distinto devuelve "true"

// Otros ejemplos de operadores

5 > 3; // mayor (true)

15 >= 26; //mayor o igual (false)

4 < 20; // menor (true)

4 <= 2; // menor o igual (false)

// Operadores Logicos 

//AND && (nos permiten unir sentencias de codigo por las cuales queremos preguntar)

let dia = "domingo"
let clima = "soleado"

dia == " domingo " && clima == "soleado"

// true

// OR || (si una sentencia da verdadera, toda la sentencia completa dará verdadero)

8 >=15 || 8 != 13 

// true

// CONCATENACION 
// se utiliza el simbolo " + "

let nombre = "Julian"
let apellido = "Alvarez"

console.log(nombre + " " + apellido) // Julian Alvarez





