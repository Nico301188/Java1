// arrays (o arreglo) y objects (objetos)

const superList = ["Banana", "Pescado", "Queso", "Gaseosa"];
//        index = [    0    ,    1   ,    2   ,    3   ] posicion de cada cadena del array
//        length= 4             Largo del array

// como acceder a un valor de un array
console.log(superList)
console.log(superList[2])

// objetos, es un conjunto de datos (ideal para colocar valores de distinto tipo texto,numero,booleanos)

const carObj = {
    brand: "Romeo",
    model: 2009,
    automatic: true,
    color: "Gris",
    drivers: [{
        name: "Guadalupe",
        nacionalidad: "Argentina"
    },
    {
        name: "Aldo",
        nacionalidad: "Chile"
    },
    {
        name: "Facu",
        nacionalidad: "Uruguay"
    }]
}
console.log(carObj)
console.log(carObj.drivers)
console.log(carObj.drivers[1].name)
console.log(carObj["color"])