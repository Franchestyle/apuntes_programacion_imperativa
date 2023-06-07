// While
// Tiene una estructura similar a la de los condicionales if/else, palabra reservada + condicion entre parentesis. el while loop revalúa esa condicion repetidas veces y ejecuta su bloque de codigo hasta que la condicion deja de ser verdadera 

while(condicion){
    //codigo que se ejecutara en cada repeticion
    // hace algo para que la condicion eventualmente se deje de cumplir
}

// Ejemplo 
let vuelta = 1 //definimos el valor de vuelta
 
while (vuelta <= 5) {//antes de ejecutar pregunta si la condicion es V o F
    //si es falsa se detiene
    console.log("Dando la vuelta numero" + vuelta);
    vuelta++
    //es importante generar el contador al comenzar para evitar caer en lo que se conoce como loop infinito
}


// Do while
// es similar al while pero se diferencia en que, sin importar la condicion, la accion se realizara al menos una vez

let vuelta1 = 5
do{
    console.log("dando la vuelta numero " + vuelta1);
    vuelta1++ //Se suma 1 a la vuelta por lo tanto vuelta = 6 
} while(vuelta1 <= 5); //al vuelta ser 6 la condicion retorna false y se termina el bloque de codigo

//Ejemplo de playground
function tablaDeMultiplicar(numero) {
	let i = 1;
	while(i <= 10){
		let resultado = numero * i;
		console.log(resultado)
		i++
	}
	
}
