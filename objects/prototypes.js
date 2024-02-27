// Como declarar un objeto, js todo lo interpreta como objetos, los prototipos tienen medotos adentro.
// "Hola mUndo" > String
// {} > Objeto
// [] > Array
const persona1 = {
  name: 'samuel',
  age: 13,
  height: 1.8,
  gender: 'male',
  isAlive: true,
  foodType: ['frutas', 'verduras', 'semillas', 'etc'],
  eyes: { color: 'brown', shape: 'big' },
  sleep: function () {
    console.log('Estoy Durmiendo')
  },
  comer: function () {
    console.log('Estoy comiendo')
  }
}

// //INstancia tiene una palabra
// reservada llamada "new", es para crear
// una plantilla para utilizar despues.
// los prototipos es para hacer funciones personalizadas para el codigo
// Los metodos son funcciones y estas funciones se ejecutan

// const human = new Object({
//   eyes: true,
//   destruye: function () {
//     console.log('destruyendo...')
//   }
// })

// const sueter = new Object({
//   color: 'rojo',
//   material: 'algodon',
//   gorrito: false,
//   estampado: true
// })

// Object.prototype.cubrirDelFrio = function () {
//   console.log('cubrir del frio')
// }

// const ger = Object(cubrirDelFrio)

// ger.cubrirDelFrio()

// const persona = new Object()
