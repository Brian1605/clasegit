function saludar() {
  alert("hola2");
}

function sumar(num1, num2) {
  alert(num1 + num2);
}

function restar(num1, num2) {
  alert(num1 - num2);
}

function multiplicar(num1, num2) {
  alert(num1 * num2);
}

function dividir(num1, num2) {
  alert(num1 / num2);
}

//let num1 = parseFloat(prompt("ingrese numero 1 a sumar"))
//let num2 = parseFloat(prompt("ingrese num2 a sumar"))
//alert(sumar(num1,num2))

function recibirParametrosYMostrarlos() {}
//camelCase

const PI = 3.14;
const MAXIMO_PESO = 500;

//screaming_snake_case

//pascalCase Persona, Auto
// persona
/*
//Realizar un algoritmo donde se ingresen dos numeros y un operador (+, -, *, /)
//a traves de prompts y muestre por consola el resultado
let num1 = parseFloat(prompt("ingresar numero 1"));
let operador = prompt("ingrese un operador (+, -, *, /)");
let num2 = parseFloat(prompt("ingresar numero 2"));
calculadora(num1, num2, operador);

function calculadora(numero1, numero2, oper) {
  switch (oper) {
    case "+":
      sumar(numero1, numero2);
      break;
    case "-":
      restar(numero1, numero2);
      break;
    case "*":
      multiplicar(numero1, numero2);
      break;
    case "/":
      dividir(numero1, numero2);
      break;
    default:
      alert("error");
  }
}*/

/*
Crear una funcion esPalindromo(cadena) que reciba una cadena de texto sin espacios y determine si es un palÃ­ndromo, 
es decir, si se lee igual de izquierda a derecha que de derecha a izquierda. La funciÃ³n debe devolver true si lo es,
 y false si no.
*/
console.log(esPalindromo("neuquen"))
//"oso"[0] -> o
// o , s , o
function esPalindromo(cadena){
    //comparar letra por letra desde afuera hacia adentro // invertir la cadena y comparar
    String(cadena)
    let bandera = 0
    for(let i = 0; i<cadena.length;i++){
        if(cadena[i]==cadena[cadena.length-i-1]){
            console.log(cadena[i]+"="+cadena[cadena.length-1-i]+": son iguales")
        }else{
            console.log(cadena[i]+"="+cadena[cadena.length-1-i]+": son distintos")
            bandera = 1
        }
    }
    if(bandera==0){
        return true
    }else{
        return false
    }
}

//Crear una funcion segundoMayor(arr) que reciba un array de enteros sin ordenar y retorne el segundo valor mas alto.
//console.log(segundoMayor([1,45,89,66,2,3]))
function segundoMayor(array){
    let mayor = -1
    for(let i = 0; i<array.length;i++){
        if(array[i]>mayor){
            mayor=array[i]
        }
    }
    //buscar hasta q sea = a mayor y cambiarlo a -1
    for(let i = 0; i<array.length;i++){
        if(array[i]==mayor){
            array[i]=-1
        }
    }
    //buscar el mayor de nuevo
    mayor = -1
    for(let i = 0; i<array.length;i++){
        if(array[i]>mayor){
            mayor=array[i]
        }
    }

    return mayor
}


console.log(segundoMayor([1,45,89,66,2,3]))
function segundoMayor(array){
    let mayor = -1
    let segundoMayor = -1
    array.sort()
    for(let i = 0; i<array.length;i++){
        let num = array[i]
        if (num > mayor) {
            segundoMayor = mayor; // El antiguo mayor ahora es el segundo mayor
            mayor = num;         // Actualizamos el nuevo mayor
        } else if (num > segundoMayor && num < mayor) {
            segundoMayor = num;  // Actualizamos solo el segundo mayor
        }
        
    }


    return segundoMayor
}
