// FACTORIAL
// multiplica el numero por si mismo y todos los enteros detras de el hasta el 0
function factorial(numero){
    if (numero < 0) return "El dominio de la funcion son numero naturales"
    if ( numero == 0) return 1;
    let factorial = numero;
    while (numero > 1) {
        // factorial = numero * (numero -1)
        numero *= --numero
    }
}

console.log(factorial(5));

// depende de cuantas veces vayamos a iterar utilizaremos el for o el while

function fibonacci(n) {
    0 1 1 2 3 5 8 13 21 34
    if (n = 0) return 0;
    if (n = 1) return 1;

    while (n > 1) {

        
        n = n + (n - 1)
    }
}