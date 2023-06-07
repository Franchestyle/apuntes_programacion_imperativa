function loopDePares(numero){
    for(let i = 0; i < 100; i++){
        let x = (i + numero);
        if(x % 2 == 0){
            console.log('El número ' + x + ' es par.');
        }
    }
}

loopDePares(5);

function loopDeImpares(numero, palabra){
    for(let i = 0; i < 100; i++){
        let x = (i + numero);
        if(x % 2 == 1){
            console.log(palabra);
        }
    }
}

loopDeImpares(5, 'gola');

function sumatoria(numero){
    let resultadoSumatoria = 0;
    for(let i = 1; i <= numero; i++){
        resultadoSumatoria += i;
    }
    return resultadoSumatoria;
}

console.log(sumatoria(10));

function nuevoArreglo(numero){
    let array = [];
    for(let i = 1; i <= numero; i++){
        array.push(i);
    }
    return array;
}

console.log(nuevoArreglo(50));

function split(string){
    let arrayString = [];
    for(let i = 0; i < string.length; i++){
        arrayString[i] = string[i];
    }
    return arrayString;
}

console.log(split('Hola'));

function arrayHandler(array1, array2){
    let arrayAux = split(array1);
    let arrayAux1 = split(array2);
    for(let i = 0; i < arrayAux.length; i++){
        console.log('Soy ' + arrayAux[i] + ' y yo soy ' + arrayAux1[i]);
    }
}

arrayHandler([1, 2, 3, 4], 'hola');

function palindromo(palabra){
    let stringAux = split(palabra);
    let stringAux1 = '';
    for(let i = palabra.length - 1; i >= 0; i--){
        stringAux1 += stringAux[i];
    }
    stringAux1 = split(stringAux1);
    if(stringAux.toString() === stringAux1.toString()){
        return true;
    }
    return false;
}

console.log(palindromo('anilina'));