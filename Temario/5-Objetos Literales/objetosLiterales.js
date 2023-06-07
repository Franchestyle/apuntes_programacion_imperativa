// un objeto es una estructura de datos que puede contener propiedades y metodos.
// para crearlo usamos llave de apertura y de cierre

let auto = {
    patente : 'AC 124 DD'
}
//---------------------------------------------------//

// este objeto tendra propiedades, las que queramos, separados con comas
// con la notacion objeto.propiedad accedemos al valor de cada una de ellas

let tenista = {
    nombre: 'Roger',
    apellido: 'Federer'
};

console.log(tenista.nombre)// Roger
console.log(tenista.apellido)// Federer
//---------------------------------------------------//

// una propiedad puede almacenar cualquier tipo de dato. Si una propuedad almacena una funcion, diremos que es un metodo del objeto

let tenista1 = {
    nombre: 'Roger',
    edad: 38,
    activo: true,
    saludar: function() {
        return '¡Hola! Me llamo Roger';//se escribe similar a las funciones expresadas, vemos que se crean mediante el nombre metodo, seguido de la funcion anonima
    }
}

console.log(tenista.saludar());// ¡Hola! Me llamo Roger
//---------------------------------------------------//

//la palabra reservada this hace referencia al objeto en si donde estamos parados, osea el objeto donde escribimos la palabra

let tenista2 = {
    nombre: 'Roger',
    edad: 38,
    activo: true,
    saludar: function() {
        return '¡Hola! Me llamo ' + this.nombre;
    }
}
console.log(tenista.saludar());// ¡Hola! Me llamo Roger
