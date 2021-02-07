

class Persona {

    nombre = '';
    codigo = '';
    frase = '';
    constructor( nombre= 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
}

const spiderman = new Persona('Peter Parker', 'Spider','Soy tu amigable Vecino Spider Man ');
console.log(spiderman);
const ironman = new Persona('Toni Stark', 'Iron','Yo soy Ironman ');
console.log(ironman);
