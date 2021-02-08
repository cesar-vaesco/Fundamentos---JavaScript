class Persona {

    // Manipulando la firma del método usando el método estático
static porObjeto( {nombre, apellido, pais} ){
    return new Persona( nombre, apellido, pais );
}

    constructor(nombre, apellido, pais){

        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`info: ${this.nombre }, ${ this.apellido}, ${this.pais}`);
        
    }

}

const nombre1 = 'César',
      apellido1 = 'Vargas',
      pais1 = 'México' ;

const vero = {
    nombre: 'Vero',
    apellido: 'Cortez',
    pais: 'México'
      }

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto( vero );


persona1.getInfo();
persona2.getInfo();
