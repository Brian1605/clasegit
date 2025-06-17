/*console.log("empieza el programa")
setTimeout(() =>{console.log("proceso pesado")},2000)
setTimeout(() =>{console.log("proceso pesado")},1000)

console.log("proceso terminado")
*/
//promesas

/*const promesas =new Promise((resolve,reject)=>{
   
})

function crearPromesa(condicion){
    return new Promise((resolve,reject)=>{
        if(condicion==true){
            resolve("promesa resuelta")
        }else if(condicion==false){
            reject("promesa rechazada")
        }else{

        }
    })
}
console.log(crearPromesa(true))
console.log(crearPromesa(false))
console.log(crearPromesa())

console.log(
    crearPromesa(false)
    .then((data) => {
        console.log(data,"se ejecuta  en caso de exito")
    })
    .catch((error) => {
        console.log(error,"se ejecuta  en caso de error")
    })
    .finally(() => {
        console.log("guardado en log")
    })
);
console.log(
    crearPromesa(true)
    .then((data) => {
        console.log(data,"se ejecuta  en caso de exito")
    })
    .catch((error) => {
        console.log(error,"se ejecuta  en caso de error")
    })
    .finally(() => {
        console.log("guardado en log")
    })
);
*/
/////////////////////////////////////practico async await///////////////////

function buscarDato(mensaje){
    const promesa = new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(mensaje)
            resolve()
        },Math.random()*1000);
    })
    return promesa;
}

async function funcionAsincrona() {
    await buscarDato("1. buscar mejor vendedor")
    await buscarDato("2. producto mas vendido")
    await buscarDato("3. mejor cliente")
    await funcionAsincrona2()
    await buscarDato("4. compra mas grande del mejor cliente")
    await buscarDato("5. mejor proveedor")
}

async function funcionAsincrona2() {
    await buscarDato("buscar otra cosa")
}

//funcionAsincrona()

async function provincias(){
    try{
        //intenta esto
        const resultado = await fetch("https://fakestoreapi.com/products")
    const data= await resultado.json()
    console.log(data[3]);
    }catch(error){
        //ejecuta esto en caso de error
    }
}

provincias()

let funcion =() => {}
setTimeout(() => {}, Math.random()*1000);

function funcion2(fn1,fn2){
    fn1()
    fn2()
}

funcion2(buscarDato(),)

function uno(callback) {
    console.log("uno")
    callback()
}
function dos() {
    console.log("dos")
}
function tres() {
    console.log("tres")
}
