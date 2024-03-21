document.addEventListener("DOMContentLoaded", () => {
    const solicitarDatos = async () => {
        
        const reponse = await fetch ("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
        
        console.log(reponse)
        return reponse
    }

    solicitarDatos()
})

// TEAREA: entre a consumir la api, pero en el HTML