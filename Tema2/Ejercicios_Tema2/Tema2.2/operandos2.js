function concatenarCadenas(){

    let clase = 2017;
    let x = "ALUMNO";
    let y = "DAW";

    resultado=(`${x}_${y}_${clase}`)

    return resultado === "ALUMNO_DAW_2017";
}
console.log(concatenarCadenas())

function operadorTernario(){
    
    let x = 0;

    let resultado = x <= 0 ? true : false;

    return resultado;

}

console.log(operadorTernario())

function deleteArray(){

    let array = [1,2,3,4,5,6,7,8,9,10];

    delete array[9];

    return array[9] === undefined;

}

console.log(deleteArray())

function crearArray(){

    fecha = new Date();
    passa = new Object();

    let x = [1.5,
        "ALUMNOS",
        fecha,
        1,
        passa,
        undefined,
        null
    ];

    return  x[0] ===  1.5
        && x[1] ===  "ALUMNOS"
        && x[2] instanceof Date
        && typeof x[3] === "number"
        && typeof x[4] === "object"
        && x[5] === undefined
        && x[6] === null;

}
console.log(crearArray())

function existeElemento(){
    let prueba1;
    let prueba2;
    let x = {prueba1,prueba2};

    return "prueba1" in x && "prueba2" in x;

}

console.log(existeElemento())