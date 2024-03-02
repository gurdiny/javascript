//parametros dentro de los parentesis
// El function es como si fuera una variable

// funcion en orden
function imprimir(name, lastname) /*Parametros*/ {
  /*cuerpo de la funcion*/
  console.log(name, lastname)
}
// imprimir("Gerardo", "Urias")

// funcion sin orden
function imprimir2({ name, lastName }) {
  console.log(name, lastName)
}
// imprimir2({lastName: "Urias", name: "Gerardo"})

// funcion sin orden
function imprimir3({ name, lastName, age, gender, height }) {
  console.log(name, lastName, age, gender, height)
}
// imprimir3({
//   name: "Gerardo",
//   lastName: "Urias",
//   age: 26,
//   gender: "male",
//   height: "1.80m",
//   weight: "82 kg",
// })

//Imprimir todo menos ciertos objetos
// function imprimir4(props) {
//   // const {name, age} = props //Solo lo que quiero
//   const {age, ...elNombreQueQuieras} = props //Solo lo que nos quiero

//   console.log(age, elNombreQueQuieras)
// }
// imprimir4({
//   name: "Gerardo",
//   lastName: "Urias",
//   age: 26,
//   gender: "male",
//   height: "1.80m",
//   weight: "82 kg",

// })

//Scope Global: alcance global
// const a = "hola mundo" //Variable global se pueden usar donde sea
// console.log(a)

// //Scope Local: alcance dentro de la function
// function scope(){
//   const b = "saludo" //Variable local: solo se ocuapan dentro de las functions
//   console.log(b)
// }
// scope()

// const a = function miPirmerFuncion(){
//   let a = 5
//   console.log(a)
// }

// a()

// function suma(a, b){
//   const operacion = a + b
//   console.log(operacion)
// }
// suma(52, 5)

// let num = 0

// function couter() {
//   if(num >= 10){
//     return
//   }

//   num = num + 1
//   console.log(num)

//   // Eejcutar dentro de la funcion (Recursividad)
//   couter()
// }

// // Eejcutar fuera de la funcion
// couter()

// const saludame = function saludo(name){
//   if(!name) return "el campo es necesario!!"
//   const saludoCompleto = `Hola ${name}!, esto es una prueba`

//   return saludoCompleto
// }

// console.log(saludame ("Gerardo"))

const saludame = function saludo(name) {
  if (!name) return 'Hola amigo, ¿como estas?'

  const saludoCompleto = `hola ${name}, ¿como estas?`
  return saludoCompleto
}

console.log(saludame('Gerardo'))
let numero = 0

function suma() {
  if(numero >= 10) {
    return
  }
  numero = numero + 1
  console.log(numero)
  suma()
}

suma()

const residuo = function parInpar(numero) {
  let esPar = null

  if (numero % 2 === 0) {
    esPar = `Tu ${numero} es par`
  } else {
    esPar = `Tu ${numero} es impar`
  }

  return esPar
}

console.log(residuo(5500553))

// Del profe

let num = 0

function alterar() {
  count = num + 1
}
alterar()
alterar()
console.log(count)


function evenOdd(number) {
  let message 
  if(typeof number !== "number"){
    message= ` el ${number} No es un numero`
    return message
  }
  if (number % 2 === 0){
    message= `el numero ${number} es par`
    return message
  } 
  message= `el numero ${number} es impar`
  return message

}

console.log(evenOdd("hola"))