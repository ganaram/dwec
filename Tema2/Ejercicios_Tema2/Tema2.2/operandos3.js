//Implementar las siguientes funciones para que pasen una serie de pruebas
//Usando solo estructuras de control para ello.

//Devuelves 1 si a es mayor que b
//Devuelves -1 si a es menor que b
//Devuelves 0 si a es igual b

const arr = [1,4,5,5,2,6,7,1,4,6]

function quienEsMayor(a,b){
    let resultado;

    if(typeof a !== "number" || typeof b !== "number"){
        return "Mala asignacion, introduce numeros";
    }

    resultado = a<b ? resultado = -1 : a>b ? resultado = 1 :resultado = 0

    return resultado

}

console.log(typeof(1/0))
console.log(quienEsMayor(1/0,2))

//Dado un array de elementos, devuelve la suma de todos aquellos que los elementos sean pares
function sumarElementosPares(elemetos){
    let suma = 0;
    for(i = 0;i<elemetos.lenght;i++){
        if(elemetos[i]%2===0){
            suma +=elemetos[i];
        }
    }
    return suma;
}

console.log(sumarElementosPares(arr));

//Dado un array de elementos devuelve el valor mas grande de todos ellos.
function escogerValorMasGrande(elemetos){

}

//Dada una palabra cualquier, devuelve la palabra alreves, por ejemplo: "HOLA" => "ALOH"
function invertirUnaPalabra(String){

}

//Dada un array, cuenta el numero de elementos impares que contiene
function contarElementosImpares(String){

}


