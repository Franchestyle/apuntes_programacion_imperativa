// Arrow functions 
//Las arrow functions —o funciones arrow— son una forma de crear funciones incorporadas a partir de ES6 —ECMAScript versión 6—. Una de sus ventajas es que son más concisas que las funciones clásicas creadas con la palabra reservada function.

// forma clásica
function sumar(a, b) {
    return a + b;
   }
   console.log( sumar(2, 4) ); // 6
   
   // ES6 arrow function
   let sumar = (a, b) => a + b;
   
   console.log( sumar(2, 4) ); // 6

// no se utiliza la palabra reservada function 
// Es necesario que sean asignadas como texto simple para destacar

// utilizan el operador "=>" para definir las secuencias de codigo que la funcion va a ejecutar

let suma = (num1, num2) => {return num1 + num2};

// si solo tenes una sentencia de codigo y es la misma que queres retornar, no son necesarios las llaves ni la palabra reservada "return"

let suma1 = (num1, num2) => num1 + num2;

// si la arrow function recibe un solo parámetro no seran necesarios los parentesis que encierran al mismo

let elDoble = num => num * 2;

// si quisieras ejecutarlas, el procedimiento es igual a una funcion tradicional

let elDoble1 = num => num * 2;

    elDoble(6); //el resultado es 12


// Si la arrow function tiene varias sentencias de codigo a ejecutar si seran nesarias las llaves y la palabra reservada "return"

let esPar = numero => {
    if(numero%2===0){
        return true;
    }
    return false;
}



