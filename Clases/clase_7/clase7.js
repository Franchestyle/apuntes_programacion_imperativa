

function puedeSubir(altura, estaAcompaniada, estaPenalizada) {
    if (estaPenalizada) return false;
    if (altura >= 1.4 && altura < 2) return true;
    if (altura >= 1.2 && altura < 1.4 && estaAcompaniada) return true;
    return false;
}

let alturaIngresada;
let estaAcompaniadaIngresada;
let estaPenalizadaIngresada;

alturaIngresada = prompt("Ingrese la altura: ");
estaAcompaniadaIngresada = prompt("Ingrese si esta acompañada: ")
estaPenalizadaIngresada = prompt("Ingrese si esta penalizada: ")

console.log(
    puedeSubir(
        parseFloat(alturaIngresada),
        estaAcompaniadaIngresada,
        estaPenalizadaIngresada)
)