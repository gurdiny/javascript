export const blogsApi = async () => {
     
    const container = document.querySelector(".list")
    const reponse = await fetch ("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
    
    reponse.forEach(element => {
        const listUl = document.createElement("ul")
        listUl.classList.add("ulList")
        container.append(listUl)
        
        const liTitle = document.createElement("li")
        liTitle.textContent = `Titulo: ${element.title}`
        listUl.append(liTitle)

        const liDescript = document.createElement("li")
        liDescript.classList.add("body")
        liDescript.textContent = `Descripcion: ${element.body}`
        listUl.append(liDescript)

        const listUl2 = document.createElement("ul")
        liDescript.append(listUl2)

        const liId = document.createElement("li")
        liId.classList.add("id")
        liId.textContent = `Id: ${element.id}`
        listUl2.append(liId)

        const liUser = document.createElement("li")
        liUser.classList.add("user")
        liUser.textContent = `User: ${element.userId}`
        listUl2.append(liUser)
    })
       
    
    console.log(reponse)

    return reponse
}

