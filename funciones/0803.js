// Dates
const today = new Date('1989-09-15')

const monthIndex = today.getMonth()
const dateUTC = today.toUTCString()

console.log(monthIndex)
console.log(dateUTC)

const dateArray = dateUTC.split(' ')

const month = dateArray[2]
console.log(`la fecha es: ${today.getDay()}/${month}/${today.getFullYear()}`)

// Tarea
const nameMonthS = today.toLocaleString('en-US', { month: 'short' })
console.log(nameMonthS)

const pelota = ['roja', 'azul', 'amarillo', 'morado']
const aleatorio = Math.round(Math.random() * (pelota.length - 1))

console.log(pelota[aleatorio], aleatorio)


