let palabra = ['hola','javascript','vehiculo','asd']

let palabraAleatoria=palabra[Random(0,palabra.length)]

function Random(inicio,maximo){
    return Math.floor(Math.random() * (maximo-inicio))+inicio
}
console.log(palabraAleatoria)

let palabraUsuario

for (let i = 0; i < 8; i++) {
    palabraUsuario = prompt('ingrese una palabra')
    console.log(i)
    if(palabraUsuario===palabraAleatoria){
        break
    }
}
if(palabraUsuario===palabraAleatoria){
    console.log('ganaste')
}else{
    console.log('perdiste')
}