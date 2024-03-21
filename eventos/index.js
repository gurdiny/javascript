document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btn-event")
  
  btn.addEventListener('click', (event) =>{
    event.preventDefault()
    console.log("Hola")
  })
});
// Syntaxis de un evento
// /* Los parametros vienen de addEventLisetener y esos parametro son opcionales */
// nodo.addEventListener("evento", () => {
//     /**que va a suceder en el evento*/

// })
