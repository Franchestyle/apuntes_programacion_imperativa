const prompt = require ("prompt-sync") ({siginnt: true})

let edad = 23

if(edad < 0){
    console.log("Edad invalida")
} else if(edad >= 21){
    console.log("Felicidades capooo");
    if(edad %2 == 1) {
        console.log("es impar");
    }
} else {
    console.log("No puede pasar");
}


function totalAPagar( vehiculo, litrosConsumidos){
    let total = 0;

    switch(vehiculo){
        case "auto":
            total = 86 * litrosConsumidos;
        break;
        case "moto":
            total = 70 * litrosConsumidos;
        break;
        case "autobus":
            total = 55 * litrosConsumidos;
        break
            default:
                console.log("No es correcto");
                return
    }
    if(total >= 0 && total <= 25 ){
        total += 50;
        
    } else {
        total += 25;//  total = total + 25;
    }
    return total;
}

console.log(totalAPagar('autobus',70));