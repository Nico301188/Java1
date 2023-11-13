//hacer que se muestren las casas que van del nro 0 al 100 (valor variable
//y las que sean pares deben terminar con un *)

const housesNumber = 100

for (let index = 0; index <= housesNumber; index++) {
    const houses = "Casa nro" + index
    //matematicamente si un nro dividido por 2 da 0 es par, si no impar
    //Operador modulo (%) -> devuelve el resto de la divicion de 2 numeros
    if (index %2 === 0) {
        console.log(houses +"*")
    }
    console.log(houses)

}