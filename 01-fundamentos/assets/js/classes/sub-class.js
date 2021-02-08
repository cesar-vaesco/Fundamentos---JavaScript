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

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return this.comida;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(` ${this.codigo} dice: ${this.frase}`);

    }
}

class Heroe extends Persona {
    clan = 'Sin clan';

    constructor(nombre, codigo, frase){
        // super(nombre, codigo, frase); MAndando llamr al constructor de la clase padre

        this.clan = 'Los Avengers';
    }
    quienSoy(){
        console.log(`Soy ${this.nombre }, ${ this.clan}`);
        // LLamar al método quienSoy() de la clase padre
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable Vecino Spider Man ');

console.log( spiderman );

spiderman.quienSoy();