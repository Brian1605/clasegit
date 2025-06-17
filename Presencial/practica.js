const Auto = {
    marca: "Ford",
    modelo: "Mustang",
    arrancar: function(){
        console.log(`el auto ${this.marca} ${this.modelo} esta arrancado`)
    }
}

Auto.arrancar()

const Usuario = {
    nombre: "brian",
    email: "bg49689@gmail.com",

    presentarse(){
        console.log(`hola soy ${this.nombre} y mi email es ${this.email}`)
    }
}

Usuario.presentarse()

class Libro {
    constructor(titulo, autor){
    this.titulo = titulo
    this.autor = autor
    }

    presentar(){
    console.log(`Titulo: ${this.titulo}\n Autor: ${this.autor}`)
}
}


const libro1 = new Libro ("El señor de los anillos", "JRR tolkien")
const libro2 = new Libro ("El Eternauta", "Isaac Asimov")
libro1.presentar()
libro2.presentar()

class Alumno {
constructor(nombre, curso){
this.nombre = nombre
this.curso = curso
}
mostrarDatos(){
Console.log(`Nombre del alumno: ${this.nombre}\n Curso: ${this.curso}`)
}
}

class Vehiculo {
constructor(marca, año){
this.marca = marca
this.año =año
}
datosVehiculo(){
console.log(`Marca del Vehículo ${this.marca}\n ${this.año}`)
}
}

const auto1 = new Vehiculo("Volkswagen", "2017")
const auto2 = new Vehiculo("Ford", "2020")

auto1.datosVehiculo
auto2.datosVehiculo

class Mascota{
constructor(nombre, tipo){
this.nombre = nombre
this.tipo = tipo
}

emitirsonido (){
if(this.tipo === "perro")
    console.log ("Guau Guau")
else(this.tipo === "gato")
    console.log("Miau Miau")
}
}

const miPerro = new Mascota ("siruis" , "perro")
const miGato = new Mascota("michi" , "gato")
const escarabajo = new Mascota("escarabajo","escarabajo")

miPerro.emitirsonido()
miGato.emitirsonido()
escarabajo.emitirsonido()