// 1. Dado un arreglo [1,2,3,4,5,6], retornar un nuevo arreglo que contenga como elementos,
// arreglos con la cantidad de elementos que indica el numero: ejemplo: [[1],[2,2],[3,3,3], ...]
const numeros = [1, 2, 3, 4, 5, 6]

const resultado = numeros.map((numero) => {
  let num = []
  for (let index = 0; index < numero; index++) {
    num.push(numero)
  }
  return num
})
console.log(resultado)

// 2. Crear una función que dado una array y un string devuelva los elementos del arreglo
// que contengan al string ejemplo: f('ma',['manzana','perro','marmota']) devuelve ['manzana','marmota']
const consulta = 'ma'
const combinado = ['manzana', 'perro', 'marmota']

const letras = consulta.split('')
const resultado2 = combinado.filter((com) => {
  for (letra of letras) {
    if (com.indexOf(letra) !== -1) return true
  }
  return false
})

console.log(resultado2)

// const consulta = "ae";
// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// const letras = consulta.split(""); //divides las letras individualmente
// const filtrado = meses.filter(mes => { //filtras los meses
//   for(letra of letras){ //recorres las letras
//     if(mes.indexOf(letra) !== -1) //Chequeas si la letra está dentro de la palabra
//       return true;
//   }
//   return false;
// });
// console.log(filtrado)

const grupo = [
  {
    name: 'Pedrito',
    grades: [9, 9, 8, 7]
  },
  {
    name: 'Juanita',
    grades: [8, 7, 6, 9]
  },
  {
    name: 'María',
    grades: [10, 9, 10, 8]
  },
  {
    name: 'Luisito',
    grades: [6, 7, 8, 5]
  }
]

const promedio = grupo.map(estudiante => {
  const sum = estudiante.grades.reduce((acc, curr) => acc + curr, 0)
  const promedio = sum / estudiante.grades.length

  return { nombre: estudiante.name, Promedio: promedio }
})

console.log(promedio)
