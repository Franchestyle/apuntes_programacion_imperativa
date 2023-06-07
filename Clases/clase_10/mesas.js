const prompt = require ("prompt-sync") ({sigint: true});


let peliculas = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella']
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

// function aMayuscula(pelis){

//     for(let i = 0; i < pelis.length; i++ ){
//         pelis[i] = pelis[i].toUpperCase()
//     }
//     console.log(pelis)
// }

// aMayuscula()



function combinarPelis(pelis, pelisAnimadas){
    let todasPeliculas = pelis.concat(pelisAnimadas);

    for (let i = 0; i < todasPeliculas.length; i++) {
        todasPeliculas[i] = todasPeliculas[i].toUpperCase();
      }

    return todasPeliculas;
}


let todasLasPeliculas = combinarPelis(peliculas, peliculasAnimadas);

//console.log(todasLasPeliculas)


function eliminarPelicula(cartelera){
    let videojuego = cartelera.pop()
    console.log(cartelera)
    return videojuego
}

//eliminarPelicula(todasLasPeliculas)

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparador(asia, euro){
    for(let i = 0; i < asia.length; i++){
        if(asia[i] === euro[i]){
            console.log('son iguales')
        } else{
            console.log('son diferentes')
        }
    }
}

comparador(asiaScores,euroScores)


