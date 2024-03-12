// const numero = [1, 2, 3, 4, 5]
const colores = ['verde', 'blanco', 'rojo', 'azul', 'rosa', 'morado', 'negro']

// .push agrega un elemento a lo ultimo del array
// console.log(numero)
// numero.push(6)
// console.log(numero)

console.log('=Break=')
// .pop Elimina el ultimo elemento de un array
console.log(colores)
colores.pop()
console.log(colores)
console.log('=Break=')
// .push agrega un elemento al ultimo elemento del array
colores.push('Dorado')
console.log(colores)
console.log('=Break=')
// .shift Elimina el primer elemento de un array
colores.shift()
console.log(colores)
// .unshift agrega el elemento al principio del array
colores.unshift('PLata')
console.log(colores)

// push => agrega al final
// unshift => agrega al inicio

// pop => quita el último
// shift => quita el primero

//  split => String convbierte en un array
console.log('Hola/blanco/rojo/azul/rosa/morado/Dorado'.split('/'))

//  join => Une todos los elementos de una mattriz y los convierte en string
console.log(colores.join())

//  slice => Devuelve una copia de una parte del array dentro de un array No modifica el array original
// Slice devuelve uno antes
const colores2 = colores.slice(0, 4)

console.log(colores2)


//  splice => cambia contenido de un array eliminando elementos exitsnete y/o agrega nuevos elementos
// splice si modifica el array original 
// primer parametro es el incide donde se posicionará (si es mayor)
// segundo parametro 0 para insertar y 1 para rempalzar
// tercer parametro el objeto que quiero insertar o remplazar

colores.splice(0, 0, "Fushia")
console.log(colores)


// Dpia 04-03-24
const cosas = ["perro", "gato", "caballo", "perro"]

const found = cosas.filter((cosa, index) => cosa === "perro")
console.log(found)