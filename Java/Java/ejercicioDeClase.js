// ejercicio 1
const cantPeces = 3

if (cantPeces != "") {
    let stg = "Estos son los peces de la pecera -->"
    let pez = ""
    for (let i = 1; i <= cantPeces; i++) {
        pez = pez + "🐟"

    }
    console.log(stg + pez)
}

// ejercicio 2
const piramide = 3

for (let i = 1; i <= piramide; i++) {
        console.log("*")
}

// ejercicio 3
// crear una variable que contenga un array con un listado de numeros,
//  lograr calcular el promedio de dichos numeros por medio de un ciclo
//  for e imprimirlo por consola


let array = [1,2,3,4,5,6,7];
let suma = 0;
let index;
for (index = 0;index < array.length; index++) {
    console.log(`elemento #${index+1}: ${array[index]}`);
    suma += array[index];   
}

console.log(`dividendo : ${suma}`);
console.log(`divisor: ${index}`);
console.log("el promedio es: ",suma/(array.length));