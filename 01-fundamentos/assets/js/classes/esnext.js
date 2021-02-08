

class Rectangulo {
    #area = 0;

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    calcularArea(){
        console.log( this.#area * 2 );
    }
}


const rectangulo = new Rectangulo(10, 15);
// Problema: se puede cambiar el valor de una propidedad de una clase directamente afectando su resultado
// Resultado esperado: 150 - resultado entregado: 100
//rectangulo.#area = 100;

rectangulo.calcularArea();
console.log( rectangulo );