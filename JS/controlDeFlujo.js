let variable = 10

if(10!=variable){
    console.log("mensaje 1")
}else{
    console.log("mensaje 2")
}

// == -> igual
//!= -> diferente
// < -> menor
// > -> mayor
// <= -> menor o igual
// >= -> mayor o igual

let var1 = 10, var2 = -5, var3 = 0

if(var1>=10 /*true*/ && var2==0 /*false*/ && var3=<5 /*true*/){ //&& -> AND
    console.log("mensaje")
}

if(var1 >10) || (var2==-5) || (var3 >5) // || -> OR

if(!true){ // si es true el "!" lo cambia a false y si es false lo cambia a true
    console.log("mensaje")
}

//true y false -> 1 y 0

console.log(True == 1)//true
console.log(True === 1)//false

console.log(False == 0)//true
console.log(False ===0)//False

let nota = A
switch (nota) {
    case "A":
        console.log(10)
        break;
    case "B"
        console.log(8)
        break
    case "C"
        console.log(6)
        break
    default:
        console.log("nota no valida")
        break;
}

if(nota=="A"){
    console.log(10)
}else if(nota=="B"){
    console.log(8)
}else if(nota=="C"){
    console.log(6)
}else{
    console.log("nota no valida")
}

let mes= 5

switch (Mes){
    case 12:
    case 1:
    case 2:
    console.log("verano")
    break;
    case 3:
    case 4:
    case 5:
    console.log("otonio")
    break;
    case 6:
    case 7:
    case 8:
    console.log("invierno")
    break;
    case 9:
    case 10:
    case 11:
    console.log("primavera")
    break;
    default:
    console.log("mes no valido")
    break;
}

let monto = 5001
let cliente = "frecuente"

if(cliente=="regular" || monto<=500){
    console.log(monto - monto*5/100)
}else if((cliente=="frecuente" || (monto>500 && monto<=1000)) && monto<=5000){
    console.log(monto - monto*10/100)
}else if((cliente=="premium" && monto>1000) ||(cliente=="frecuente" && monto>5000)){
    console.log(monto - monto*20/100)
}