// Dpia 04-03-24
// const cosas = ['perro', 'gato', 'caballo', 'perro']

// const found = cosas.filter((cosa) => cosa === 'perro')
// console.log(found)

const cosas1 = ['perro', 'gato', 'caballo', 'perro']
const buscar = 'perro'

// let search = (thing) => thing === buscar

let filtrar = (array, callback1) => {
  let newArray = []
  array.forEach((element) => {
    const exist = callback1(element)
    if (exist) newArray.push(element)
  })
  return newArray
}

console.log(filtrar(cosas1, (thing) => thing === buscar))

const cosas2 = ['perro', 'gato', 'caballo', 'perro']
cosas2.forEach((element) => console.log(element))


const cosas3 = ['perro', 'gato', 'caballo', 'perro']
const found = cosas3.find((element) => element === 10)

console.log(found)

const indice = cosas3.indexOf('hola')

if (indice >= 0) console.log(`el inidice ${indice}`)
else console.log("nada")


console.log(cosas3.includes("gato"))
console.log("hola mundo".includes("p"))
