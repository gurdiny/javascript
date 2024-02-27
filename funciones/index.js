//parametros dentro de los parentesis 
// El function es como si fuera una variable

// funcion en orden
function imprimir(name, lastname) /*Parametros*/  {
  /*cuerpo de la funcion*/
  console.log(name, lastname)
}
// imprimir("Gerardo", "Urias")

// funcion sin orden
function imprimir2({name, lastName}) {
  
  console.log(name, lastName)
}
// imprimir2({lastName: "Urias", name: "Gerardo"})


// funcion sin orden
function imprimir3({name, lastName, age, gender, height}) {
  
  console.log(name, lastName, age, gender, height )
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


const a = function miPirmerFuncion(){
  let a = 5
  console.log(a)
}

a()

function suma(a, b){
  const operacion = a + b
  console.log(operacion)
}
suma(52, 5)

let num = 0

function couter() {
  if(num >= 10){
    return
  }

  num = num + 1
  console.log(num)

  // Eejcutar dentro de la funcion (Recursividad)
  couter()
}

// Eejcutar fuera de la funcion
couter()

const saludame = function saludo(name){
  if(!name) return "el campo es necesario!!"
  const saludoCompleto = `Hola ${name}!, esto es una prueba`

  return saludoCompleto
}

console.log(saludame ("Gerardo"))