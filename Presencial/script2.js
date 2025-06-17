//objeto simple/literal
const persona = {
    //propiedades (caracteristicas)
    nombre: "brian",
    apellido: "gonzalez",
    edad: 18,

    //metodos(acciones)
    saludar(){
        console.log(`hola soy ${this.nombre} y tengo ${this.edad} años`)
    }
}