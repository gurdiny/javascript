// function validaciones() {
//   if (true) {
//     console.log('se cumple el if')
//   }
//   if (true) saludar('samuel')
// }

// validaciones()
const suma = 5 + 5
if (suma > 4) {
  console.log('si es mayor')
} else if (suma === 10) {
  console.log('Es igual')
} else {
  console.log('Es menor')
}

const suma2 = 5 - 3
const resultado =
  suma2 > 4
    ? console.log('si es mayor 2')
    : console.log('es menor 2')
      ? suma2 == 2
      : console.log('es igual')

// Console log o algo que imprima algo, no se deja en el codigo
// Puedes poner un TODO: Remover, TODO: Revisar, etc. Esto es una nota para tu mismo
// Haces un find en todo el proyecto, y lo remueves

const sentimiento = 'tristeza'

switch (sentimiento) {
  // Cuerpo del Switch
  case 'enojo':
    console.log('Estoy enojado...')
    break // Si este caso se cumple no se evaluen los demas

  case 'Feliz':
    console.log('Estoy Feliz...')
    break

  case 'tristeza':
    console.log('Estoy tristeza...')
    break

  case 'ansiedad':
    console.log('Estoy ansioso...')
    break
  default:
    console.log('Estoy mehh...')
    break
}

/*Forma 1*/
/* Las Arrow Fuction no pueden ser anonimas */
function imprimir() {
  console.log('Imprimiendo...')
}

imprimir()
/* Arrow Function*/
/* Las Arrow Fuction pueden ser anonimas 
Cuando una funcion es anonima y se pone en una variable, 
la variable se convierte en el nombre de la funcion

El arrow Function ya sustituye el Function
*/

const imprimir2 = () => {
  console.log('Imprimiendo2...')
}

imprimir2()

function saludar(name = 'amigo') {
  const greeting = `Hola ${name}, mucho gusto!`

  return greeting
}
console.log(saludar('gerardo'))

/* parametros */
const saludar2 = (name = 'amigo') => {
  const greeting = `Hola ${name}, mucho gusto!`
  return greeting
}
console.log(saludar2('gerardo'))


// funcion == metodo == callback
/* arrow functions
  1. anonimas
  2. usan flecha
  3. return implicito
*/
function saludar (name) {
  const message = `Hola ${name}!`
  /* mandar un correo a la persona y saludarla por email */
  return message /* explicito */
}
const saludar2 = (name) => `Hola ${name}!`
const saludar3 = (name) => {
  const message = `Hola ${name}!`
  /* mandar un correo a la persona y saludarla por email */
  return message /* explicito */
}
/* funtions = metodo = callback */
const salud = (name) => `hola ${name}!`
