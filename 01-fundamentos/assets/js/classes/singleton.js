 /*-- Singleton es un patrón de diseño creacional que nos permite asegurarnos de que una clase tenga una única instancia --*/
class Singleton {

    static instancia; //undefined
    nombre = '';

    constructor( nombre = ''){
        // console.log(Singleton.estancia);

        const a = undefined;
        // console.log(a); --> indefined
        //  console.log(!a); --> true
        // console.log(!!a); --> false
         /*-- Asegurarse que ya exista una instancia implementada - creada --*/
        if ( !!Singleton.instancia) {
            return Singleton.instancia; // Si la hay se sale del constructor
        }
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

 /*-- Toda las instancias apuntan a la primer instancia creada --*/
const instancia = new Singleton('Ironman');
const instancia2 = new Singleton('Spaiderman');
const instancia3 = new Singleton('BlackPanther');

console.log(`Nombre en la instancia es: ${ instancia.nombre} `);
console.log(`Nombre en la instancia es: ${ instancia2.nombre} `);
console.log(`Nombre en la instancia es: ${ instancia3.nombre} `);