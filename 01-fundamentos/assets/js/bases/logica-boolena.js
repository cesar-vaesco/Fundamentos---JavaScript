
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
} 

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
} 

console.warn('Not o la negación');
console.log( true );
console.log( !true );
console.log( false );
console.log( !false );
console.log(!regresaTrue());

console.warn('And - dpble condición');
console.log(true && true);
console.log(true && false);
console.log(true && !false);

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = false && 'Hola mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalse && true;
const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso';
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso';

console.log({a1, a2, a3, a4, a5, });
