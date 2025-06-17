class Vehiculo {
    #dueño
        constructor(marca,modelo,año,nacionalidad,chasis,motor){
            this.marca=marca
            this.modelo=modelo
            this.año=año
            this.nacionalidad =nacionalidad
            this.chasis=chasis
            this.motor=motor
        }

    get dueño(){
        return this.#dueño
    }

    set dueño(persona){
        if(persona instanceof Persona){
            this.#dueño = persona
        }else{
            console.log('Persona Incorrecta')
        }
        
    }
}

class Auto extends Vehiculo {
    //constructor(){//asiento,puertas
    //}

    verInfo(){
        console.log(this.dueño?.nacionalidad?.pais)
    }
}

class Persona{
    constructor(apellido,nombre,edad,nacionalidad,dni,grupoSangre,factorSangre){
        this.apellido=apellido
        this.nombre=nombre
        this.edad=edad
        this.nacionalidad=nacionalidad
        this.dni=dni
        this.grupoSangre=grupoSangre
        this.factorSangre=factorSangre
    }
}

const persona1 =new Persona('lopez','pepe',30,'argentino',454545454,'A','+')

console.log(persona1)
const auto = new Auto('toyota','corolla',2025,'argentino',1,2)

auto.dueño='pepe'
auto.verInfo()

fun1(auto)
function fun1(auto){
    const {marca,modelo}= auto
    console.log(marca,modelo)
}
const ob1={
    marca:'toyota',
    modelo:'corolla',
    dueño:{
        nombre:'pepe',
        nacionalidad:'argentino'
        
    }
}

console.log(ob1?.dueño?.nacionalidad)


let numeros = [1,2,3,4,5] // 1 2 3 4 5 
let nombres = ['juan', 'pedro', 'julieta']

let arrayJunto = [...numeros,nombres]

console.log(arrayJunto)

let ob2={
    ...ob1,
    otravariable:'algo'
}

console.log(ob2)

console.log(Math.max(...numeros)) //[1,2,3,] -> 1 2 3 4

function sumar (...numeros){
    console.log(numeros)
}

sumar('sumar',1,2,3,4,5,6,7,8,9)


let carrito=[1]

carrito.length===0 && console.log('carrito vacio')

const persona = {
    nombre:'pepe',
    edad:17
}

let entrada = persona.edad>=18 && new Date()

if(persona.edad>=18 && new Date()!='hola')

console.log(entrada)

persona.edad>=18 ? console.log('menor'): console.log('mayor')

let persona11 =null
console.log(persona11 || 'apellido por defecto') //FALSY (0,"", null, undefined)

console.log(persona11 ?? 'apellido por defecto') //NULLISH (NULL O UNDEFINED)

