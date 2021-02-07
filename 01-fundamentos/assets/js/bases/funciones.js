
function saludar() {
    console.log('Hola mundo');
    return 1;
}

const saludar2 = function () {
    console.log('Hola mundo con función anónima');
}

const saludar3 = () => console.log('Hola mundo con función arrow');

const solicitarNombre = ( nombre ) =>{
    console.log('Hola: ', nombre);
}

const solicitarNombre2 = function ( nombre ) {
    console.log('Hola: ', nombre);
}

const retornoSaludar = saludar();
console.log(retornoSaludar);

solicitarNombre('César');
solicitarNombre2('Vero');
saludar();
saludar2();
saludar3();