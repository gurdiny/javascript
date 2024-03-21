// document.addEventListener("DOMContentLoaded", () => {
//     // const titulo = document.getbtnById("btnoId")
// btn.textContent = "iniciar sesion"
//     // const tituloClass = document.getbtnsByClassName("btnoClase")
// btn.textContent = "iniciar sesion"

//     // console.log(titulo)
//     // console.log(tituloClass)

//     const tituloTag = document.querySelector("h1")
//     const tituloClass = document.querySelector(".btnoClase")
// btn.textContent = "iniciar sesion"
//     const tituloid = document.querySelector("#btnoId")
// btn.textContent = "iniciar sesion"
//     const tituloAttr = document.querySelector("[attributobtno='LAL']")
// btn.textContent = "iniciar sesion"
//     const tituloChild = document.querySelector("#btnoId2 + p")
// btn.textContent = "iniciar sesion"

//     //Query selector Te busca el primer elemto que coincida con tu busqueda
//     //Query Selector all te busca todos los que coincidan dentro de un array

//     console.log(" Tagname", tituloTag)
//     console.log("Por clase", tituloClass)
//     console.log("Por id", tituloid)
//     console.log("Por Attr", tituloAttr)
//     console.log("Por Hijo", tituloChild)
// })

// document.addEventListener("DOMContentLoaded", () => {
//     const tituloTag = document.querySelectorAll("p")
//     tituloTag.forEach((parrafo, index) => {
//         const content = parrafo.innerHTML
//         if(content.includes(".")) parrafo.innerHTML = `$ ${parrafo.innerHTML}`

//         // parrafo.textContent = "hola"

//     });

// })

// // No se pueden modificar los Pseudosbtnos en JS
// btn.textContent = "iniciar sesion"
// document.addEventListener("DOMContentLoaded", () => {
//  const titulo = document.querySelector("h1")
// //  titulo.style.fontSize = "10px"  //Estilos en linea sobre escriben el css

//   titulo.classList = "lol"
//   titulo.id = "EsteEsSuId"
//   titulo.setAttribute("zule", "10pts")
// //   console.log(titulo.getAttribute("zule"))
//   console.log(titulo.offsetTop)
// })

document.addEventListener('DOMContentLoaded', () => {
  // // Insertar elementos en html
  // // Paso 1 Obtener el Contenedor (El archivo vacio body)
  // const container = document.querySelector("body")

  // // Paso 2 Crear Boton
  // const btn = document.createElement("a")
  // btn.textContent = "Iniciar sesion"
  // btn.style.background = "purple"
  // btn.style.color = "white"
  // btn.style.border = "dashed 2px cyan"
  // btn.style.borderRadius = "10px"

  // btn.setAttribute("href", "/iniciar-sesion")
  // console.log(btn)

  // // Paso 3 Insertar el btno en el contenedor
  // container.prepend(btn)



  /** Fabrica de botones */
  const container = document.querySelector('body')
  const nav = document.createElement('div')
  nav.classList = 'contenedor-de-botones'
  container.append(nav)
  /**/
  const createBtn = (
    { background = 'purple', color = 'white', url = '#', text = '...' },
    box
  ) => {
    const btn = document.createElement('a')

    btn.textContent = text
    btn.style.background = background
    btn.style.color = color
    btn.style.border = 'dashed 2px cyan'
    btn.style.borderRadius = '10px'
    btn.style.display = 'inline-block'
    btn.style.minWidth = '200px'
    btn.style.padding = '10px'
    btn.style.textAlign = 'center'
    btn.setAttribute('href', url)

    box.append(btn)
  }

  createBtn({}, nav)
  createBtn(
    {
      background: 'green',
      color: 'yellow',
      url: ']/nueva-pagina',
      text: 'boton Santiago'
    },
    nav
  )
})
