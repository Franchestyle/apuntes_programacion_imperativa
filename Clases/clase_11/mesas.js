let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "CIRUJA MARTINEZ",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

let cliente = arrayCuentas

let banco = {
    cliente: arrayCuentas,
    consultarCliente: function(titular) {
        for(let i = 0; i <= arrayCuentas.length; i++) {
            if(cliente[i].titularCuenta === titular) {
            return cliente[i]
            }
        }
    },


    deposito: function(titular, cantidadDinero) {

        for(let i = 0; i <= arrayCuentas.length; i++) {
            if(cliente[i].titularCuenta === titular) {
              let suma = cliente[i].saldoEnPesos + cantidadDinero;
              cliente[i].saldoEnPesos = suma;
              console.log(`El saldo total a depositar es de ${suma}`);
              return suma;

            }

    } 
  },

  extraccion: function(titular, montoAExtraer){
    for(let i = 0; i <= arrayCuentas.length; i++) {
      let resta = cliente[i].saldoEnPesos - montoAExtraer;
      if(resta < 0) {
          console.log('Fondos insuficientes');
      } else if(titular === cliente[i].titularCuenta) {
          console.log(`Extracción realizada correctamente, su nuevo saldo es: ${resta}`);
      }
      return resta;
}
  }
}

//no llega el dato numerico pero la logica esta diez puntos 
let nuevoSaldo = banco.deposito('CIRUJA MARTINEZ', 300)

let extraccionIgual = banco.extraccion('CIRUJA MARTINEZ', 9000);
console.log(extraccionIgual);

// let clienteEncontrado = banco.consultarCliente('CIRUJA MARTINEZ');

// console.log(clienteEncontrado);