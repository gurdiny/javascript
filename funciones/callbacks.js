// Un callback es una funcion que se ejecuta dentro de una funcion

const imprimir = (mensagge) => console.log(mensagge)



const formato = (str, callback) => {
  const formated = str.split('').reverse().join(' ')

  callback(formated)
  return formated
}

formato('hola mundo', imprimir)