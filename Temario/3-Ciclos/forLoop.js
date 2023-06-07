// Ciclos: for loop
//es una serie de estados por los que pasa un acontecimiento o fenómeno, que se repiten siempre en el mismo orden.

for (Inicio; condicion ; modificador){
    // codigo que se ejecutara en cada repeticion
}

// consta de 3 partes que definimos dentro de los parentesis, nos permitiran de que manera se van a realizar las repeticiones y definir las instrucciones

// en este ejemplo contaremos de 1 hasta 5 inclusive
for (let vuelta = 1; /* definimos el valor inicial */ vuelta <= 5; /*definimos la condicion V o F;*/ vuelta++/*definimos que se modificará*/) {
    console.log("Dando la vuelta mumero " + vuelta);// sumamos el string con el valor que nos devuelve "vuelta" y lo mostramos por consola
};

// Ejemplos de de ciclo for en playground
function loro(texto){// le pasamos a la funcion por parametro "texto"
    for(let repe = 1; repe <= 5; repe++){ 
        // definimos el valor, la condicion y la modificacion
        console.log(texto);// nos devolera por consola el parametro la cantidad de veces que definimos dentro del for
    }
}

// otro ejemplo
function noParesDeContarImparesHasta(numero){// funcion que recibe como parametro un numero y cuenta todos los numeros impares desde el 0 hasta el numero x
    let contador = 0;// definimos una variable contador para almacenar los datos

    for(let i = 1; i <= numero ; i++)
        if(i % 2 !== 0) {// en el if le decimos que si el resto de la division es distinto de 0 le sume a 1 a "contador"
            contador++;
        }
        return contador;// retornamos contador con la suma del if
} 
