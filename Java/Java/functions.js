// FUNCIONES
// Aislar una porcion de codigo que sea de mi utilidad y que se repita varias veces

// Sumas varias veces, para eso creamos la funcion Suma

function suma(a, b) {
    return a + b;
}

const resultado = suma(40, 60)
console.log(resultado)

//  function f(x){
//     return 2 * x + 1
//  }
//  console.log(f(5))

const catsQuantity = window.prompt("Cuantos gatos quiere mostrar?");

function modulo(a, b) {
    return a % b
}

function catConcat(stg,emogi){
return stg.concat(emogi)
}

function catlist(cats){
    if (isNaN(cats)) {
       return console.warn("Ingresaste un valor incorrecto")
    }
    for (let i = 1; i <= cats; i++) {
        
        const mod = modulo(i,3)
        let catNumber = `Gato #${i}`
if (mod===1) {
    catNumber = catConcat(catNumber,"👦")
} else if (mod ===2) {
    catNumber = catConcat(catNumber,"👦")
}else{
    catNumber = catConcat(catNumber,"👦")
}
console.log(catNumber)

    }
}


catlist(catsQuantity);

// Arrows Function

const f = (x)=> {
    return 2 * x +1;
}

const f2 = x => 2 * x +1;

