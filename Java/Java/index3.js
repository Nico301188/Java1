// concatenaciones de STRING
// para los String podemos declarar con " , '
// ` (este tilde es para poder concatenar con ${}) 

const greeting ="Hola! Bienvenido a nuestra app, "
const userName = "nicolas"

console.log(greeting + userName)
console.log(greeting.concat(userName))
console.log(`Hola! Bienvenido a nuestra app, ${userName}`)
console.log(`${greeting}${userName}`)

console.log("/---IF & else ----/")
//lo vamos a usar cuando queramos que se ejecute un codigo si pasa tal o cual cosa (operacion logica)

const num =3
const num2 =5

if(num > num2){
console.log(`${num} es mayor que ${num2}`)
} else if (num < num2){
    console.log(`${num} es menor que ${num2}`)
}else {
    console.log("num y num2 son iguales")
}


console.log("/-----Bucles------/")
//codigo repetido
// console.log("casa nro 1")
// console.log("casa nro 2")
// console.log("casa nro 3")
// console.log("casa nro 4")
// console.log("casa nro 5")

for (let index = 1; index <= num2; index++) {
    // if (index !==5) {
    //     console.log(`casa nro ${index}`)        
    // }
    if (!(index ===5)) {
        console.log(`casa nro ${index}`)
        
    }
}

console.log("FIN DEL CICLO 💪🏻")