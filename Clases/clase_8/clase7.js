

for(let i = 0; i <= 10; i++){
    console.log(i)
}


// IF, FOR, SWITCH, WHILE

//  FUNCTION declaradas o expresadas
// dentro de las funciones podemos colocar los ifs, for, witch y while dentro de las llaves


let num;

function esPrimo(valor) { //50
    let i = valor;
    while (i > 1) {
        if (valor % i == 0) return false;
    }
    return true;
}