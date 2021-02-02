function saludar(nombre) {
    return [1, 2, 3, 4, 5];
}


const retornoSaludar = saludar('César');

// console.log(retornoSaludar);


function sumar (a , b ) {
    return a + b; 
}

const sumarFlecha = (a , b) => a + b;

// function getAleatorio(){
//     return Math.random() * 100;
// } 

const getAleatorio2 = () => Math.random() ; 

console.log( getAleatorio2() );
// console.log( sumar(1 , 2));
// console.log(sumarFlecha( 2 , 4));