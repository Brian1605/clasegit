//PEDIR AL USUARIO 3 NUMEROS
//y ordenarlos de mayor a menor
//mostrar en la consla(console.log)
// a=2 b=40 c=30
// b c a 40 30 2

num1 = Number(prompt ("ingresa el primer numero"));
num2 = Number(prompt ("ingresa el segundo numero"));
num3 = Number(prompt ("ingresa el tercer numero")); 

if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        console.log(num1, num2, num3);
    } else {
        console.log(num1, num3, num2);
    }
} else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
        console.log(num2, num1, num3);
    } else {
        console.log(num2, num3, num1);
    }
} else if (num3 > num1 && num3 > num2) {
    if (num1 > num2) {
        console.log(num3, num1, num2);
    } else {
        console.log(num3, num2, num1);
    }
}
//VARIABLES let var 

// (int - float) string bool
//10      10.5   "texto"  true/false
let numero = 10;
let decimal = 10.5;
let texto = "texto";
let booleano = true;


//operaciones + - * / % **
//Comparaciones (operadores logicos)
// == != < > >= <= ---> ) bool
//pedir un numero al usuario y determinar si es mayor a 20

// numero = 10
//AND && - OR ||
