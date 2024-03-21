// cada arhivo de js solo podemos tener 1 por defoult

export const suma = (a, b) => a + b
export const resta = (a, b) => a - b
export const multiplicacion = (a, b) => a * b
export const division = (a, b) => a / b

export default (a, b, operacion) => {
  let res = 0
  if (operacion === '+') res = a + b
  if (operacion === '-') res = a - b
  if (operacion === '*') res = a * b
  if (operacion === '/') res = a / b

  return res
}
