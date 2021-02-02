let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono', 'Super Cell'];
console.log( 'Largo: ', juegos.length );

let primero = juegos[0];
let ultimo = juegos[juegos.length -1];

// console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

let nuevaLongitud= juegos.push('Metal Slug');
console.log( {nuevaLongitud, juegos} );

nuevaLongitud = juegos.unshift('Warriors');
console.log({ nuevaLongitud,juegos });

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

let posicion = 1;
let juegosBorrados = juegos.splice(posicion, 2);
console.log({ juegosBorrados, juegos });

let metroidIndex = juegos.indexOf('Chrono');
console.log({metroidIndex});