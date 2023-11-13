//ciclos for anidados

const carsQuantity = 50
const peopleByCar = 2

for (let i = 0; i <= carsQuantity; i++) {
    const car = "Auto #"
    const carWithNumber = car.concat(i)
    let carWithPeople = carWithNumber
    for (let y = 0; y < peopleByCar; y++) {
        carWithPeople = carWithPeople.concat("👦")

    }
    console.log(carWithPeople)
}