const fecha2 = new Date(200,4,20,16,30,21)//sabado
const fecha3 = new Date(200,4,20,16,30,21)//sabado
const fecha = new Date()

console.log(fecha2==fecha3)

console.log(fecha.getDay())
// 0 : domingo
// 1 : lunes
// 2 : martes
// 3 : miercoles
// 4 : jueves
// 5 : viernes
// 6 : sabado

console.log(fecha.getDate())

console.log(fecha.getMonth())
//enero:0
//diciembre:11
//computadora
//computadora -> computadora

console.log(fecha.getFullYear())
console.log(fecha.getHours())
console.log(fecha.getMinutes())
console.log(fecha.getSeconds())
console.log(fecha.getMilliseconds())


console.log(fecha.toISOString())


fecha.setFullYear(2020)

console.log(fecha.toLocaleDateString("es"))//DD/MM/YYYY
console.log(fecha.toLocaleString("es"))//DD/MM/YYYY, HH:MM:SS
console.log(fecha.toLocaleTimeString("es"))//HH:MM:SS

console.log(fecha.toDateString("es"))//DD/MM/YYYY
console.log(fecha.toUTCString("es"))//DD/MM/YYYY, HH:MM:SS
console.log(fecha.toTimeString("es"))//HH:MM:SS

personalbar.getNombre()