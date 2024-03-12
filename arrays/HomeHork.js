// Tarea 1
const tarea1 = (array) => {
  array.reverse()
  return array
}
const array1 = ['one', 'two', 'three']
console.log(tarea1(array1))

// Tarea 2

const traea2 = () => {
  array2 = [1, 20, 2, 3, 5]
  console.log(Math.max(...array2))
  return
}

traea2()

// Tarea 3
// Crear una función que recibe un arreglo de strings y un string, la función devuelve true si ese string se encuentra en el arreglo y false si no se encuentra

const traea3 = (str, strBuscado) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === strBuscado) {
      return true
    }
  }

  return false
}
const str = ['manzana', 'banana', 'pera', 'uva']
const strBuscado = 'manzana'
console.log(traea3(str, strBuscado))

// Tarea 4
// Crear una función que pueda contar cuantas
// veces aparece un elemento dado en los parámetros en un arreglo también dado en sus parámetros.

const traea4 = (elemento, arreglo) => {
  let contador = 0
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === elemento) {
      contador++
    }
  }

  return contador
}

const elemento = 'a'
const arreglo = ['a', 'b', 'c', 'a', 'a', 'b', 'a']
console.log(traea4(elemento, arreglo))

// Tarea 5
// Crear una Función que suma 2 números y regrese el resultado

const tarea5 = (a, b) => a + b
console.log(tarea5(5, 5))
