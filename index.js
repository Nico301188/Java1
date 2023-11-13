//las variables devlaradas como "var" van a poder accederce desde cualquier 
//lugar del archivo js y podra cambiar su valor y redefinirce
var cadena = "esto es una cadena de caracteres!"
// cadena=5;
// Las variables "let" solo se va a poder acceder dentro de un determinado
// bloque de codigo(funciones) y cambiar su valor
let numero = 4;
// numero=false;

// Las variables "let" solo se va a poder acceder dentro de un determinado
// bloque de codigo(funciones) y NO se podra redeclarar pero si cambiar su valor
const bool = false;
// bool = numero

console.log("hello world!!")
console.log(cadena)
console.log(numero)
console.log(bool)


console.log("/---------------------------------------------/")

let number=2;
const constant = number 
console.log(constant)

number = number+3
console.log(constant)