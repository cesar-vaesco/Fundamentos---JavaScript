
const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = ( miembro ) => miembro ? '2 Dólares': '10 Dólares';  

console.log(elMayor(20, 15));
console.log(tieneMembresia(true));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki'
];

console.log( amigosArr );

const nota = 82.5; 

const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A' : 
              nota >= 85 ? 'B+': 
              nota >= 80 ? 'B' : 
              nota >= 75 ? 'C+': 
              nota >= 70 ? 'C' : 
              nota >= 65 ? 'D+': 
              nota >= 60 ? 'D' : 'F' ;
              
console.log( {nota, grado} );