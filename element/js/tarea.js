// Tarea:
// 1 Crear un `H1` con el texto *Hola mundo, agregarlo al DOM*
// 2 Crear un `ul` y dado un arreglo de nombres insertar nodos `li` por cada elemento en el arreglo
// 3 Crear un elemento `p` y después eliminarlo a traves de su nodo padre
// Para el ejercicio 3 habrá que investigar un poco, de todas formas lo veremos en clase.
// Contraer

document.addEventListener('DOMContentLoaded', () => {
  // Tarea 1
  //     const container = document.querySelector('body')
  //   const encabezado = document.createElement('h1')
  //   encabezado.innerHTML = 'Hola Mundo'
  //   container.append(encabezado)
  //  console.log(container)

  // tarea 2
  // 2 Crear un `ul` y dado un arreglo de nombres insertar nodos `li` por cada elemento en el arreglo
  const names = ['Ricardo', 'Juan', 'María', 'Xime']
  const insertName = (array) => {
    const ulLista = document.createElement('ul')
    array.forEach((element) => {
      const lista = document.createElement('li')
      lista.innerHTML = element
      ulLista.append(lista)
    })
    return ulLista
  }
  // 3 Crear un elemento `p` y después eliminarlo a traves de su nodo padre
  // const contendor4 = document.querySelector('body')
  // const container3 = document.createElement('div')

  // const parrafo = document.createElement('p')
  // parrafo.innerHTML = 'Hola Mundo'
  // contendor4.append(container3)
  // container3.append(parrafo)

  // setTimeout(() =>{
  //   container3.removeChild(parrafo)
  // }, 4000)
})
