console.log("/------Asignaciones-----/")
let data;

console.log(data);
//la asignacion de un valor lo hacemos con un solo =
data = "Esta es nuestra primera asignación"

console.log(data)

console.log("/------Operadores matematicos y logicos-----/")

//simbologia para operaciones matematicas
//suma -->  +
//resta -->  -
//multiplicacion -->  *
//divicion -->  /

console.log("ejemplo de suma", 10 + 2)
console.log("ejemplo de resta", 10 - 2)
console.log("ejemplo de multiplicacion", 10 * 2)
console.log("ejemplo de divicion", 10 / 2)
console.log("ejemplo de calculo combinado", 10 / 2 + 3)
console.log("ejemplo de calculo combinado", 10 / (2+3))

//simbologia de operadores logicos
// and (y - vamos a pedir que ocurra una cosa y la otra) --> &&
// or (o - vamos a pedir que ocurra una cosa o la otra) --> ||
// Mayor que (una cosa mayor que otra) -->  >
// Menor que (una cosa menor que otra) -->  <
// Mayor o igual que -->  >=
// Menor o igual que -->  >=
// Not (no es) --> ! (lo que no queremos que sea)
// Simplemente igual (compara valor pero no tipo) --> ==
// simplemente desigual (compara valor pero no tipo) --> !=
// estrictamente igual (compara valor y tipo) --> ===
// estrictamente desigual (compara valor y tipo) --> !==

// una operacion logica devuelve como resultado SI o SI un valor booleano (true o false)

const num1 =7;
const stg ="abc"

console.log("ejemplo de Mayor", num1 > 4)
console.log("ejemplo de Mayor string", stg > "mno")
console.log("ejemplo de Menor", num1 < 4)
console.log("ejemplo de Mayor e igual", num1 >= 7)

console.log("Not - cambia un bool a su contrario (pero no es necesario que sea bool)", !true) //false
console.log("Not - cambia un bool a su contrario (pero no es necesario que sea bool)", !5) // false
console.log("Not - cambia un bool a su contrario (pero no es necesario que sea bool)", !0) //true
console.log("Not - cambia un bool a su contrario (pero no es necesario que sea bool)", !"") //true

console.log("simplemente igual", num1== "7")//true
console.log("simplemente desigual", num1 != 3)//true
console.log("simplemente estrictamente igual", num1 === "7")//false
console.log("simplemente estrictamente igual", num1 === 7)//true
console.log("simplemente estrictamente desigual", num1 !== "7")//true

console.log("AND - pedir que se cumplan ambas condiciones", num1 > 5 && num1 <10) //true
console.log("AND - pedir que se cumplan ambas condiciones", num1 < 5 && num1 <10) //false

console.log("OR - pedir que se cumpla almenos una condicione", num1 < 5 || num1 <10) //true
console.log("OR - pedir que se cumpla almenos una condicione", num1 < 5 || num1 >10) //false
