
let a = null;

if (a == 5) {
    console.log('A es igual a 5');
} else if (a > 5) {
    console.log('A es mayor a 5');
} else {
    console.log('A es menor a 5');
}


const hoy = new Date();
let dia = hoy.getDay();

console.log({ dia });

if (dia === 0) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
} else {
    console.log('Hoy no es lunes ni domingo');
}


// Sin usar If, else o Switch , únicamente objetos
const dias = { 0: 'Domingo', 1: 'Lunes', 2: 'Martes', 3: 'Miercoles', 4: 'Jueves', 5: 'Viernes', 6: 'Sabado' };

const diasLetras = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
//console.log(dias);
console.log(dias[dia]);
console.log(diasLetras[dia]);

