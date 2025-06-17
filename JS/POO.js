class Persona {
  #edad = 0; //variable privada
  #nombre = "nombre por defecto"
  E = 2 
  //variables
  constructor(nombreImput, apellido, nacionalidad) {
    this.nombre2 = nombreImput;
    this.apellido = apellido;
    this.nacionalidad = nacionalidad;
    this.dni = 0;
  }
  //metodos
  actualizarDNI(nuevodni) {
    if (nuevodni >= 0) {
      this.dni = nuevodni;
    }
  }

  setEdad(nuevoEdad,num1) { //set setters 
    if (nuevoEdad > 0) {
      this.#edad = nuevoEdad;
    }
  }

  getEdad() { //get getters
    return this.#edad;
  }

  get nombre(){
    return this.#nombre
  }

  set nombre(nuevoNombre){
    if(nuevoNombre.length>1){
        this.#nombre = nuevoNombre
    }
  }
}

const var1 = new Persona("pepito", "lopez", "arg", "4242424242");

const var3 = new Persona("pepito", "lopez", "arg", "4242424242");

var1.nombre="11"
//console.log(var1.nombre);




class CuentaBancaria{
  #saldo = 0
  constructor(titular,saldo=0){
    this.titular = titular
    this.#saldo = saldo
  }
  depositar(monto){
    if(monto>0){
      this.#saldo = this.#saldo + monto
      this.#logOperacion("depositar")
    }
  }
  retirar(monto){
    if(monto<=this.#saldo){
    this.#saldo -= monto
  }else{
    this.console.log("saldo insuficiente")
  }
    this.#logOperacion("se retiro")
}
  verSaldo(){
    return this.#saldo
  }

  get saldo(){
    return `ARS $` +this.#saldo
  }

  #logOperacion(operacion){
    console.log(this.#saldo + " " + operacion)
  }
}
const cuenta1 = new CuentaBancaria("brian")
const cuenta2 = new CuentaBancaria("pepe" ,5000)

//cuenta2.titular="brian"
console.log(cuenta2.saldo)
cuenta2.retirar(1000)
//console.log(cuenta2.verSaldo())
cuenta2.depositar(200)

let {saldo,titular} = cuenta2
console.log(saldo,titular)
//console.log(cuenta2.verSaldo()


class vehiculo{
  constructor(marca,modelo){
    this.marca = marca
    this.modelo = modelo
  }
   encender(){
    console.log(this.marca + " " + this.modelo + " esta encendido")
   }
}

class Moto extends vehiculo{
  hacerWheelie(){
    console.log("wheelie")
  }
  encender(){
    console.log(this.marca + " " + this.modelo + " " + " esta encendido desde el hijo")
  }
}

const moto = new Moto ("yamaha","r6")
moto.encender()

const array = [1,2,3,4,5]

const [,a,b] = array //la , al principio mueve el array

console.log(a,b)