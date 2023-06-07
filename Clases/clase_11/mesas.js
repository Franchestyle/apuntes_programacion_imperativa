let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
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

  let banco = {
    cliente: arrayCuentas,
    consultarCliente: function(titular){
        let encontrado = false;
        let i = 0;
        while(!encontrado && i < this.cliente.length){
            if(cliente[i].titularCuenta == titular){
                encontrado = true;
            } else {
                i++
            }
            
        }
        return cliente[i];
    },
    deposito: function(titular,cantidad){

    },
    extraccion: function(titular, monto){

    }
  }

  console.log(banco.consultarCliente("Ramon Connell"));