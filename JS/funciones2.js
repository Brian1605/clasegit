function funcion1(num1, cadena) {
  //logica
  num1 * 4;
  return cadena[0];
}

//console.log(funcion1(5,"cadena"))

const saludar = function (nombre) {
  console.log(nombre);
};

//saludar("pepe")

const saludarFlecha = (nombre) => {
  console.log(nombre);
};

//saludarFlecha("pepe2")

let fruta = ["manzana", "banana", "pera"];

//console.log(fruta.length)

for (let index = 0; index < fruta.length; index++) {
  //console.log(fruta[index])
}

//fruta.push("uva")

//console.log(fruta)

//fruta.unshift("naranja")
//consolñe.log(fruta

//fruta.pop()
//console.log(fruta)

//let borrado=frutas.shift()
//console.log(frutas)

//fruta.push("naranja")
//fruta.splice(0,fruta.length,"uva", "pera")
//console.log(fruta)
let cadena = "hola";
cadena.split("");
//console.log(cadena.split("").join(""))
let cadenaDeFrutas = fruta.join(" - ");
//console.log(cadenaDeFrutas)
//console.log("cadena".concat("otracadena"))

let numeros = [0, 1, 2, 3, 4, 5];
let nuevoArray = fruta.concat(numeros);
//console.log(nuevoArray)

let algunosNumeros = numeros.slice(2, 4);
//console.log(algunosNumeros)

//console.log(numeros.indexOf(3))
//console.log(fruta.indexOf("pera"))
//console.log(fruta.indexOf("Manzana".toUpperCase()))

//console.log("Manzana".toUpperCase)

//console.log(fruta.includes("pera"))
//console.log(numeros.includes(12.5))

numeros.reverse();

//console.log(numeros)

////////////////////////////////////////////////////

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
//fizzbuzz(10);

/////////////////////////////////////////////////////////

//[1,2,3] y [1,2]
//["a","b","c"] y ["a","b","c"]
//["a","b","c"] y ["a","b","d"]
let array1=[1,2,3]
let array2=[1,2]
function sonIguales(array1,array2){
    if(array1.length!==array2.length){
        return false;
    }
    for(let i =0; i<array1.length;i++){
    if(!(array1[i]==array2[i])){
        return false
    }
}
return true
}

//console.log(sonIguales(array1,array2))

/////////////////////////////////////////////////////


function factorial(numero){
    if(numero<0){
        return undefined
    }else if(numero==0 || numero == 1){
        return 1
    }

    let resultado=1
    for(let i =numero; i>=1;i--){
        resultado= resultado*i
    }
    return resultado
}
console.log(factorial(5))

let persona1 = {
  nombre : "pepe",
  apellido : "lopez",
  nacionalidad : "argentino",
  edad: 30
}

let persona2 = {
  nombre : "pepe",
  apellido : "lopez",
  nacionalidad : "argentino",
  edad: 30
}

let persona3 = {
  nombre : "pepe",
  apellido : "lopez",
  nacionalidad : "argentino",
  edad: 30
}

let personas = [persona1,persona2,persona3]

console.log("objeto persona1")
console.log(persona1)
console.log("objeto personas")
console.log(personas[1])

for (let i = 0; i < personas.length; i++) {
  console.log(personas[0].nombre);
}

console.log("---------------------------------------")

let letras = ["a", "b", "c", "d"]

letras.forEach((letra)=>{console.log(letra.toUpperCase())})

for (let i=0; i<letras.length;i++){
    console.log(letras[i].toUpperCase())
}

letras.forEach((letra,index,array)=>{console.log(letra.toUpperCase()+ index + array[index])})
console.log(letras)
console.log(letras.every(elem=>elem.length==1))
console.log(letras.some(elem=>elem.endsWith("s")))//every && / some ||

let nuevasFrutas = fruta.map(fruta => fruta.endsWith("a"))
let numerosNuevos = numeros.map(numero => numero *10)

console.log(numerosNuevos)

nuevasFrutas = fruta.filter(fruta => fruta.startsWith("m"))
console.log(nuevasFrutas)

//(condicion) ? true : false

/*
if (condicion){
  true
}else{
  false
}
*/
//0 [1,2,3,4,5,6,7,8,9]
//1 [4,5,6,[],9]
//2 [7,8]

console.log(numeros.findLast(num => num>3))//find
console.log(numeros.indexOf(num => num>3))//lastIndexOf
let numeros2=[1,5,6,7,10,-1,99]
console.log(numeros2.reduce((num1,num2)=>num1*num2))//reduceRight

console.log(personas)
for(const p of personas){
  //console.log(p.nombre)
}

for(const p in personas){
  console.log(p + " datos " + personas[p].nombre)

}