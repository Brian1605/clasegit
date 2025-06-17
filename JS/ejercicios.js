function triangulo (num){

    for(let i=1;i<=num;i++){
        console.log("*".repeat(i))
    }
}

triangulo(5)


function piramide (num){
    for (let i = 1; i <= num; i++) {
    let resultado = " ".repeat(num - i) + "*".repeat(2 * i - 1);
    }
}

piramide(5)




function contar(cadena){
    let resultado =0
    let letras = cadena.split("")
    let vocales = ["a","e","i","o","u"]
    for (let i = 0; i <= letras.length; i++) {
        for(let j =0; j<vocales.length;j++){
            if(letras[i]==vocales[j]){
                resultado++
            }
        }
    }
    console.log(resultado)
}

contar("hola mundo")