//pedir dos numeros
//sumarlos
//devolver si es par o impar
let num1 = prompt("ingrese un numero")
let num2 = prompt("ingrese otro numero")
console.log(typeof(num1))
console.log(parseInt(num1))
let total =Number(num1) + Number(num2)
console.log("el numero es par: " + (+total%2==0)) 