

// function crearPersona(nombre, apellido) {
//     return {nombre,apellido
//     }
// }

const crearPersona = (nombre, apellido) => ({nombre,apellido});

const persona = crearPersona('César', 'Vargas');
console.log(persona);


function imprimeArgumentos(){
    console.log( arguments );
}

const imprimeArgumentos2 = ( ...args ) =>{
    console.log(args);
}

// imprimeArgumentos(10, true, false, 'Hola');
imprimeArgumentos2(10, true, false, 'Hola', 'César');

const cesar = {
    nombre: 'César Vargas',
    codeName: 'Chicharo',
    vivo: false,
    edad: 40
};


console.log(cesar);


const imprimePropiedades = ( {nombre, codeName="Chicha", vivo, edad = 10} ) => {
    console.log(`Nombre: ${nombre } - CodeName: ${ codeName} - Edad: ${edad}`);
    
} 

imprimePropiedades( cesar );