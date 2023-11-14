//ciclos for anidados

const carsQuantity = 5
const peopleByCar = 2
var variable = "Global" // la voy a poder leer y escribir en cualquier espacio del codigo.

for (let i = 0; i <= carsQuantity; i++) {
    const car = "Auto #" // la variable const son de tipo local
    const carWithNumber = car.concat(i)
    let carWithPeople = carWithNumber
    for (let y = 0; y < peopleByCar; y++) {
        carWithPeople = carWithPeople.concat("👦")

    }
    console.log(carWithPeople)
}
const cantGatos = 10;
for (let i = 1; i<= cantGatos; i++) {
    const modulo = i % 3
    let catNumber = `Gato #${i}`
    switch (modulo) {
        case 1:
            catNumber = catNumber.concat("👦")
            break
        case 2:
            catNumber = catNumber.concat("x2")
            break;
        default:
            catNumber = catNumber.concat("x3")
            break
    }
    console.log(catNumber)
}