const personaje = {
    nombre: 'César Vargas',
    codeName: 'Chicharo',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -55.267
    },
    trajes: ['De Charro', 'De macuarro', 'De gala'],
    direccion:{
        zip: '55024',
        ubicacion: 'Ecatepec, Estado de México'
    },
    'ultimo-curso':'JavaScript Moderno'
};

console.log(personaje);
console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ', personaje.edad);

console.log('Coordenadas: ', personaje.coords);
console.log(`Coordenas:  latitud ${personaje.coords.lat}  - longitud ${personaje.coords.lng}`);

console.log('No. de trajes: ', personaje.trajes.length);
console.log('Último traje: ', personaje.trajes[personaje.trajes.length -1]);



console.log('Dirección: ', personaje.direccion);
console.log('Ubicación: ', personaje.direccion.ubicacion);


console.log('Último curso: ', personaje["ultimo-curso"]);

/*-- Más detalles --*/
delete personaje.edad;
console.log(personaje);

// Conocer los valores de onjeto de forma pares valor

personaje.casado = true;

const entriesPares = Object.entries( personaje );
console.log( entriesPares );

console.log(personaje);

// Evitar agregar más propiedades a un objeto

Object.freeze( personaje );

personaje.dinero = 20000;
personaje.casado = true;

personaje.direccion.ubicacion = "Husca de Ocampo, Estado de Hidalgo";

console.log(personaje);
console.log(personaje.dinero); //Undefined

// Listar propiedades de todos los objetos
const propiedades = Object.getOwnPropertyNames( personaje );
//Listar los valores de las propiedades con los que cuenta un objeto
const valores= Object.values( personaje );
console.log({propiedades, valores});