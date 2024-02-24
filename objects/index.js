// ¿Que es un objeto?. R= Cualquier cosa que tenga caracteristicas de algo
// Metodos son funciones de un objeto
// Un obejeto puede tenet key: "string" | number | boleanos | functions | Array,
// con el . despues de una variable, entras al objeto
// Los objetos no son interables

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
  },

  propiedadInventada: 'Todo fine',
  '45_propiedad-Inventada-$ftfgt': 'Todo mal'
}

const persona2 = {
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
  },

  propiedadInventada: 'Todo fine',
  '45_propiedad-Inventada-$ftfgt': 'Todo mal'
}
// # forma 1 de accedera un objeto
console.log('forma 1', persona1.name)
console.log('forma 2', persona1['name'])

// # forma 2 de accedera un objeto (Es la peor forma de hacer variables)

console.log('forma 1', persona2.name)
console.log('forma 2', persona2['name'])

persona1.comer()
persona1.sleep()
console.log('hola')
