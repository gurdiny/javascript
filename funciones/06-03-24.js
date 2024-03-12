/* Filter */
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// numeros.filter((numero) => {
//     if (numero % 2 == 0) {
//       let mensaje = `El numero ${numero} es par`
//       return mensaje
//     } else {
//       mensaje = `El numero ${numero} es impar`
//       return mensaje
//     }
// })
// console.log(numeros)

// const pares = numeros.filter((numero) => numero % 2 === 0)
// const impares = numeros.filter((numero) => numero % 2 !== 0)
// console.log(pares)
// console.log(impares)

// const pares = numeros.filter((numero) => {
//   const even = numero % 2 === 0

//   if (even) console.log(`El numero ${numero} es par`)
//   else console.log(`El numero ${numero} es impar`)

//   return even
// })

// console.log(pares)

/* Map = Regresa un array con la funcion 
ejectuada por cada elemento del array */
// let mapClass = numeros.map( (x) => `La multiplicación de ${x} es ${x * 2}`)
// console.log(mapClass)

// const numero = Array(100)
//   .fill()
//   .map((elemento, index) => index + 1)
// console.log(numero)

const cosas = ['cosas', 'perro', 'pelota']
const resultado = cosas.reduce((acc, curr) => {
  // Cuerpo de la función
  //   console.log(acc, curr)

  acc.push(curr + ' ' + 'nuevo')
  return acc
}, [])
console.log(resultado)
