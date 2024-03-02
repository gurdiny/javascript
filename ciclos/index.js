const numero = [1, 2, 3, 4, 5]
const colores = ['verde', 'blanco', 'rojo', 'azul', 'rosa', 'morado', 'negro']
const colores2 = [
  'verde2',
  'blanco2',
  'rojo2',
  'azul2',
  'rosa2',
  'morado2',
  'negro2'
]
const colores3 = [
  'verde3',
  'blanco3',
  'rojo3',
  'azul3',
  'rosa3',
  'morado3',
  'negro3'
]

console.log(numero[2])
console.log(colores.indexOf('rojo'))

// Map
// forEach
// For
// While

// El while (mientras), se ejecuta mientras sea cierto
// let ia = 0
// while (ia < colores.length) {
//   console.log(colores[ia])
//   ia++
//   break
// }

// El for es un cliclo y ocupa 3 parametros
for (let o = 0; o < 4; o++) {
  console.log(colores[o])
}

for (let o = 0; o < colores.length; o++) {
  console.log(colores[o])
}

colores2.forEach((element) => {
  console.log(element)
})

const newArray = colores3.map((element) => {
  return element + '1'
})
console.log(newArray) // Output: [2, 4, 6, 8]

let ia2 = 0
while (ia2 < colores.length) {
  console.log(colores[ia2])
  if (colores[ia2] === 'azul') break
  ia2++
}

console.log('=break=')
let ia3 = 0
while (ia3 < colores.length) {
  if (colores[ia3] === 'azul') {
    ia3++
    continue
  }
  console.log(colores[ia3])
  ia3++
}
console.log('=break=')

for (let ia7 = 0; ia7 < colores.length; ia7++) {
  if (colores[ia7] === 'rojo') continue

  console.log(colores[ia7])
}

/* For in */
/* For on */

console.log('=break=')
