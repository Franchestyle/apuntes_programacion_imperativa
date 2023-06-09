const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// let edadesMenoresA18 = [];

// function encontrarEdadesMenoresA18(array, arrayALlenar){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] < 18){
//             arrayALlenar.push(array[i]);
//         }
//     }
// }

// encontrarEdadesMenoresA18(edades, edadesMenoresA18);
// console.log(edadesMenoresA18);

// let edadesMayorIgualA18 = [];

// function encontrarEdadesMayorIgualA18(array, arrayALlenar){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] >= 18){
//             arrayALlenar.push(array[i]);
//         }
//     }
// }

// encontrarEdadesMayorIgualA18(edades, edadesMayorIgualA18);
// console.log(edadesMayorIgualA18);

// let edadesIgualesA18 = [];

// function encontrarEdadesIgualesA18(array, arrayALlenar){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] == 18){
//             arrayALlenar.push(array[i]);
//         }
//     }
// }

// encontrarEdadesIgualesA18(edades, edadesIgualesA18);
// console.log(edadesIgualesA18);


// function obtenerMenor(array){
//     let menor = array[0];
//     for(let i = 1; i < array.length; i++){
//         if(array[i] < menor){
//             menor = array[i];
//         }
//     }
//     return menor;
// }

// function obtenerMayor(array){
//     let mayor = array[0];
//     for(let i = 1; i < array.length; i++){
//         if(array[i] > mayor){
//             mayor = array[i];
//         }
//     }
//     return mayor;
// }

// function obtenerPromedios(array){
//     let promedio = 0;
//     for(let i = 0; i < array.length; i++){
//         promedio += array[i];
//     }
//     return promedio /= array.length;
// }

// function incrementarEdades(array){
//     for(let i = 0; i < array.length; i++){
//         array[i]++;
//     }
// }

const arrayCuentas =
[
    {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: 3253.40,
    edadTitular: 33,
    tipoCuenta: "sueldo"
    },

    {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: "sueldo"
    },

    {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: "corriente"
    },

    {
    titular: "Daniel Malone",
    estaHabilitada: true,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo"
    },

    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: 1616.52,
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },

    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: 1408.68,
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
]

function encontrarEdadesMenoresA30(array){
    let cuentasConEdadMenorA30 = [];
    for(let i = 0; i < array.length; i++){
        if(array[i].edadTitular < 30){
            cuentasConEdadMenorA30.push(array[i]);
        }
    }
    return cuentasConEdadMenorA30;
}

// function encontrarEdadesMayorIgualA30(array){
//     let cuentasConEdadMayorIgualA30 = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i].edadTitular >= 30){
//             cuentasConEdadMayorIgualA30.push(array[i]);
//         }
//     }
//     return cuentasConEdadMayorIgualA30;
// }

// function encontrarEdadesMenorIgualA30(array){
//     let cuentasConEdadMenorIgualA30 = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i].edadTitular <= 30){
//             cuentasConEdadMenorIgualA30.push(array[i]);
//         }
//     }
//     return cuentasConEdadMenorIgualA30;
// }

// function encontrarTitularMasJoven(array){
//     let titularMenor = array[0];
//     for(let i = 1; i < array.length; i++){
//         if(array[i].edadTitular < titularMenor.edadTitular){
//             titularMenor = array[i];
//         }
//     }
//     return titularMenor;
// }

// function encontrarCuentasHabilitadas(array){
//     let cuentasHabilitadas = [];
//     for(let i = 1; i < array.length; i++){
//         if(array[i].estaHabilitada){
//             cuentasHabilitadas.push(array[i]);
//         }
//     }
//     return cuentasHabilitadas;
// }

// function encontrarCuentasDeshabilitadas(array){
//     let cuentasDeshabilitadas = [];
//     for(let i = 1; i < array.length; i++){
//         if(!array[i].estaHabilitada){
//             cuentasDeshabilitadas.push(array[i]);
//         }
//     }
//     return cuentasDeshabilitadas;
// }

// function encontarMenorSaldo(array){
//     let menorSaldo = array[0];
//     for(let i = 1; i < array.length; i++){
//         if(array[i].saldo < menorSaldo.saldo){
//             menorSaldo = array[i];
//         }
//     }
//     return menorSaldo;
// }

// function encontarMayorSaldo(array){
//     let mayorSaldo = array[0];
//     for(let i = 1; i < array.length; i++){
//         if(array[i].saldo < mayorSaldo.saldo){
//             mayorSaldo = array[i];
//         }
//     }
//     return mayorSaldo;
// }

function generarID(array){
    for(let i = 0; i < array.length; i++){
        array[i].id = i + 1;
    }

    return array
}

function buscarPorld(array, datoID){
    for(let i = 0; i < array.length; i++){
        if(datoID === array[i].id){
            return array[i]
        } 
    }
}

function filtrarPorSaldos(array, saldo){
    let arrayCuentas = [];
    for(let i = 0; i < array.length; i++){
        if(saldo > array[i].saldo){
            arrayCuentas.push(array[i])
        }
    }
    return arrayCuentas;
}

function incrementarSaldo(array, idCliente, ingreso){
    let cliente = buscarPorld(array, idCliente)
    if(cliente.id === idCliente){
        cliente.saldo += ingreso

    } else {
        return undefined
    }
    return cliente
}

let cuentasConID = generarID(arrayCuentas)
let busquedaPorId = buscarPorld(cuentasConID, 3)
let filtroPorSaldo = filtrarPorSaldos(cuentasConID, 3000)
let incrementoSaldo = incrementarSaldo(cuentasConID, 6, 1000)

console.log(incrementoSaldo)



