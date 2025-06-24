let card = document.querySelector("#tarjeta");
let img = document.querySelector(`#img-morado`);
let boton = document.getElementById(`boton-especial`);
let formulario = document.getElementById(`newlletter`)
const iemail = document.getElementById(`email`)
//let documento2 = document.getElementsByClassName("card-title")


//node no existe document // process

//selectores .titulo-especial (clase) #titulo-especial (id)

card.style.backgroudColor = "#ff00ff";

boton.onclick = ()=>{
    console.log(`doble click`)
    let nuevoElemento = document.createElement(`button`)
    card.appendChild(nuevoElemento)
    nuevoElemento.textContent = `algo`

    //funcion que cambia estilo
    //funcion que borra algo
}

boton.addEventListener(`click`,()=>{
    console.log(`click al boton`)
})

document.addEventListener(`keydown`,()=>{
    console.log(`tecla presionada` + e.key)
    if(e.key ==`a`){
        //funcion de movimiento
    }
})

formulario.addEventListener(`submit`,(e)=>{
    e.preventDefault()
})



///sin fragments

const lista = document.getElementById(`mi-lista`)

const nombres = ["ana", "luis", "carlos", "maria"]

nombres.forEach(nombre=>{
    const li = document.createElement(`li`)
    li.textContent = nombre
    lista.appendChild(li)
})

///con fragments

const lista2 = document.getElementById(`mi-lista`)

const nombres2 = ["ana", "luis", "carlos", "maria"]

const fragments = document.createDocumentFragment()

nombres2.forEach(nombre=>{
    const li = document.createElement(`li`)
    li.textContent = nombre
    fragments.appendChild(li)
})

lista2.appendChild(fragments)