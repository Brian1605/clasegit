let cadena = "                 JaVaScRiPt JaVaScRiPt               "

console.log(cadena.charAt(2))
console.log(cadena.charAt())

console.log(cadena.indexOf("a"))

console.log(cadena.lastIndexOf("a"))

console.log(cadena.repeat(3))   //repite la cadena 3 veces

console.log(cadena.substring(4,15)) //desde la posicion 4 hasta la 15

console.log(cadena.split("a"))

console.log(cadena.split(" ")) //divide la cadena por espacios

console.log(cadena.split("c"))

console.log(cadena.startsWith("J"))//true o false
console.log(cadena.startsWith("j"))

console.log(cadena.endsWith("T"))
console.log(cadena.endsWith("t"))

console.log(cadena.includes("aVa"))

if(cadena.includes("aVa")){
    cadena = cadena.replaceAll("aVa","ava")
}

console.log(cadena) 

console.log(cadena.toUpperCase())
console.log(cadena.toLowerCase())

let cadena2 ="1"

console.log(cadena2.padStart(50,cadena)) //añade la cadena al inicio
console.log(cadena2.padEnd(50,cadena)) //añade la cadena al final

console.log(cadena.trimStart()) //elimina espacios al inicio
console.log(cadena.trimEnd()) //elimina espacios al final
console.log(cadena.trim()) //elimina espacios al inicio y al final

console.log(cadena2.concat(" ", 88, true, cadena))

