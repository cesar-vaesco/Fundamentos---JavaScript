

class Persona {

    nombre = '';
    codigo = '';
    frase = '';
    
    constructor( nombre= 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    quienSoy(){
        console.log(`Soy  ${ this.nombre } y mi identidad es ${ this.codigo}`);
    }

    miFrase(){
         /*-- Para poder poder usar un método dentro de otro método tambien es necesario usar el operador this--*/
        this.quienSoy();
        console.log(` ${this.codigo } dice: ${this.frase}`);
        
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman','Soy tu amigable Vecino Spider Man ');
console.log(spiderman);
const ironman = new Persona('Toni Stark', 'Iron','Yo soy Ironman ');
console.log(ironman);

// Un método para ser invocado se requiere usar los parentesis, 
// de no hacerlo, lo que se estaciendo es solamente usar su referencia 
spiderman.quienSoy();
ironman.quienSoy();
spiderman.miFrase();