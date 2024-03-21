import btn, { multiplicacion, division, suma, resta } from './button.js'
import btn2, {
  multiplicacion as multiplicacion2,
  division as division2,
  suma as suma2,
  resta as resta2
} from './button.js'

//  Podemos importar archivos  .json así como los modulos como js
import datos from '../datos.json' assert { type: 'json' }
import { datoNomalesPorNombre } from '../datos-normales.js'

document.addEventListener('DOMContentLoaded', () => {
  // console.log(btn(5, 4, '+'))
  // console.log(multiplicacion(4, 5))
  // console.log(division(40, 5))
  // console.log(suma(40, 5))
  // console.log(resta(40, 5))

  console.log(datoNomalesPorNombre)
  console.log(datos)
})
