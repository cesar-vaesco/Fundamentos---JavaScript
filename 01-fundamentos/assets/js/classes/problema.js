

const cesar = {
    nombre: 'César',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad} `);

    }
}

const vero = {
    nombre: 'Verónica',
    edad: 40,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad} `);

    }
}

const aurelio = {
    nombre: 'Aurelio',
    edad: 20,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad} `);

    }
}

// aurelio.imprimir();


function Persona(nombre, edad) {
    console.log('Se ejecuto esta línea')

    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad} `);
    }
}


const maria = new Persona('Vero', 40);
const glo = new Persona('Gloria', 19);
console.log(maria);
maria.imprimir();
glo.imprimir();