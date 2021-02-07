/*-- Rompiendo relación por valor o por referencia --*/
let a = 10,
    b = a;

a = 30;

console.log({ a, b });

let juan = { nombre: 'Juan' };
let ana = {...juan};
ana.nombre = "Ana"; // cambia el valor de ambos objetos-> ambos objetos e llaman Ana 
console.log({ juan, ana });

const cambiaNombre= ({ ...personaje }) => {
    personaje.nombre = 'Tony';
    return personaje;
}

let peter = { nombre: 'Peter'};
let tony = cambiaNombre( peter );

console.log( { peter,tony } );

//  Arreglos

const frutas = ['Manzanas', 'Pera', 'Piña'];

//const otrasFrutas = [...frutas];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});