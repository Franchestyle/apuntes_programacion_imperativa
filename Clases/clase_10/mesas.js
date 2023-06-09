const prompt = require ("prompt-sync") ({sigint: true});


let peliculas = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella',]
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

// function aMayuscula(pelis){

//     for(let i = 0; i < pelis.length; i++ ){
//         pelis[i] = pelis[i].toUpperCase()
//     }
//     console.log(pelis)
// }

// aMayuscula(peliculas)



// function combinarPelis(pelis, pelisAnimadas){
//     let todasPeliculas = pelis.concat(pelisAnimadas);

//     for (let i = 0; i < todasPeliculas.length; i++) {
//         todasPeliculas[i] = todasPeliculas[i].toUpperCase();
//       }

//     return todasPeliculas;
// }


// let todasLasPeliculas = combinarPelis(peliculas, peliculasAnimadas);// array completo

// //console.log(todasLasPeliculas)


// function eliminarPelicula(cartelera){
//     let videojuego = cartelera.pop()
//     console.log(cartelera)
//     return videojuego
// }

// //eliminarPelicula(todasLasPeliculas)

// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// function comparador(asia, euro){
//     for(let i = 0; i < asia.length; i++){
//         if(asia[i] === euro[i]){
//             console.log('son iguales')
//         } else{
//             console.log('son diferentes')
//         }
//     }
// }

// comparador(asiaScores,euroScores)



// function imprimirInverso(indioSolari) {
    //     for (let i = indioSolari.length; i >= 0; i--) {
        //         console.log(numeros[i]);
        //     }
        // }
        
        // imprimirInverso(numeros);
        
        
// let numeros = [1, 2, 3, 4, 5]

// function inversor(peruano) {

//     let numerosInvertidos = []

//     for(let i = peruano.length - 1; i > 0; i--) {
//         numerosInvertidos = peruano[i].push();
//     }
//     return numerosInvertidos
// }

// let invertido = inversor(numeros)
// console.log(invertido)

// let sumArray = [1,2,3]

// function sumaArray(array){
//     let suma = array[0]
//     for(let i = 1; i < array.lenght ; i++){
//         suma = suma + array[i]
//     }
//     return suma
// }

// let suma = sumaArray(sumArray)
// console.log(suma)

let julianAlvarez = ["h","o","l","a"]

function join(arandela) {
    let saludo = "";
    for(let i = 0; i <= arandela.length - 1; i++) {
        saludo += arandela[i];
    }
    return saludo
}

console.log(join(julianAlvarez));