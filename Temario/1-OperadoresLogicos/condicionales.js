// Condicionales
//  Un condicional te permite ejecutar un bloque de codigo siempre que se cumpla una condicion
//las condiciones pueden ser tan complejas y estructuradas como se quiera hacer

// Condicional IF 

let clima = "soleado";
let dia = "domingo";

if( clima == "soleado" && dia == "domingo") {
    console.log("lindo dia para pasear"); // si la con
}

// si condicional dentro del IF no se cumple, utilizaremos el ELSE
// se escribe justo despues de las llaves del if

if( clima == "soleado" && dia == "domingo") {
    console.log("lindo dia para pasear");
} else {
    // lo que haremos si no se cumple la condicion
}

// tambien existe el ELSE IF para cuando no se cumplen las condiciones del IF inicial pero sin tener que ejecutar el bloque de codigo del ELSE

if( clima == "soleado" && dia == "domingo") {
    console.log("lindo dia para pasear");
} else if ( clima == "nublado" && dia == "sabado") {
    console.log("iré al cine");
} else {
    console.log("me quedo en casa");
}
 
// Otro ejemplo

let edad = 19;
let acceso = "";

if (edad < 16 ) {
    acceso = "prohibido";
} else if (edad >= 16 && edad < 18) {
    acceso = "permitido sólo acompañado de un mayor";
} else {
    acceso = "permitido"; 
}


// IF ternario
// no se utulizaran las {} ni la palabra reservada IF o ELSE

// se escribe todo en la misma linea
condicion ? "expresion para el true" : "expresion para el false";
// solo cubre el escenario para la condicion si se cumple y otra por si no se cumple

// si en caso de que si no se cumple no queres que pase nada, podes agregar un string vacio
condicion ? "expresion para el true" : "";

// por lo general se suele agregar a una variable de ese if ternario, ya que de esa manera vas a tener almacenada en dicha variable lo que el if retornó
// Ejemplo:
let elMayor = 4 > 10 ? "El 4 es mayor" : "El 10 es mayor";
console.log(elMayor) // se almacenó y el console.log imprimio el resultado de la condicion

// Condicional SWITCH
// preguntar por algo --> si ese algo es verdadero --> ejecutar un bloque de codigo
// se utiliza la palabra reservada "switch" la cual se acompaña de unos () y unas {}

switch (expresion) {// dentro de los parentesis va la "expresion" que queres evaluar pero sin tener que definir un operador de comparacion (==, !=), dado que el switch evaluará si la expresion es exactamente igual a algunos de los casos que se encuentren dentro de las llaves
    case caso1:// los "casos" que van dentro del switch se definen utilizando la palabra reservada "case" y van acompañadas del valor que queremos comparar con la "expresion" que pusimos dentro de los parentesis, luego de esto escribimos ":"
      console.log("secumple el caso 1")// debajo del case vamos a escribir el bloque de codigo que vamos a ejecutar si esa condicion se cumple
      break;  // y para evitar que se sigan evaluando el resto de los casos si es que los hay escribiremos la palabra reservada "break" la cual permite cortar la ejecucion de codigo y salir del switch
}

// tambien podriamos implementar un caso "default" el cual se ejecutara si es que ninguno de los casos coincide con la expresion que queremos evaluar

let elMasGrande = "River Plate"; // vamos a tener una variable "elMasGrande" que a su vez va a tener un valor "River Plate"
switch (elMasGrande) { // en el switch evaluamos nuestra variable
    case "Boca Juniors":
        console.log("Murieron en Madrid");
    break;

    case "Independiente":
        console.log("en coma")
    break;

    case "Racing":
        console.log("mufasa")
    break;

    case "River Plate": 
        console.log("El mas grande papaaaaaaa")
    break;

    default: // si no estuviera es case "River Plate se ejecutiaria el default"
        console.log("el River Munich sale campeón")
}









