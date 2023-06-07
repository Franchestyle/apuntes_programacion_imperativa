

function reemplazoFastFast() {
    let frase = 'uno dos cuatro'
    frase = frase.replace('cuatro', 'tres');
    return frase
};

console.log(reemplazoFastFast())

//---------------------------------------------------//

let notas = [3, 5, 10, 9, 7, 8, 8, 8];

notas.push(1);
notas.push(4);

console.log(notas)

let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  
  let fraseNueva = arrayFrase.join(" ");
  console.log(fraseNueva)