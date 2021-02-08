

class Persona {

    static _conteo = 0;

    static get getConteo(){
        return Persona._conteo + ' instancia(s)';
    }

    static mensaje(){
        console.log( this.nombre);
        console.log('Hola a todos, soy un método estático....')
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        
        Persona._conteo++;
    }

    // Set - establece un valor
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    // Get - recuperar un valor

    get getComidaFavorita() {
        return this.comida;
    }

    quienSoy() {
        console.log(`Soy  ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        /*-- Para poder poder usar un método dentro de otro método tambien es necesario usar el operador this--*/
        this.quienSoy();
        console.log(` ${this.codigo} dice: ${this.frase}`);

    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable Vecino Spider Man ');
// console.log(spiderman);
const ironman = new Persona('Toni Stark', 'Iron', 'Yo soy Ironman ');
// console.log(ironman);


// Un método para ser invocado se requiere usar los parentesis, 
// de no hacerlo, lo que se estaciendo es solamente usar su referencia 

// spiderman.miFrase();

// //
// spiderman.setComidaFavorita = 'El pay de cereza de la tía May';

// console.log(`La comida favorita de ${spiderman.nombre} es '${spiderman.getComidaFavorita}'`);
// Persona._conteo = 2;

console.log(`Conteo estático: ${Persona._conteo}`);
console.log(Persona.getConteo);
Persona.mensaje();

// Propiedad estática de la clase definida fuera de la clase
Persona.propiedadExterna = 'Hola Mundo';

console.log( Persona.propiedadExterna );
console.log( Persona );