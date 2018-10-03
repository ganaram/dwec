// EJERCICIOS CON LOS OPERANDOS

function asignacionDeValoresSumar(){

    let x = 0;
    let y = 3;

    x+=y;

    return x === 3;
}

console.log(asignacionDeValoresSumar());


function asignacionDeValoresRestar(){

    let x = 10;
    let y = 5;
    x-=y;

    return x === 5;
}

console.log(asignacionDeValoresRestar());

function asignacionDeValoresMultiplicacion(){

    let x = 5;
    let y = 7;
    x*=y;

    return x === 35;
}

console.log(asignacionDeValoresMultiplicacion())

function asignacionDeValoresResto(){

    let x = 3;
    let y = 2;
    x = x%y;

    return x === 1;
}

console.log(asignacionDeValoresResto())

function comparacionIgualdad(){

    let x = undefined;
    let y = null;

    let resultado = (y==x);

    return resultado;
}

console.log(comparacionIgualdad())

function comparacionIgualdadEstricto(){

    let x = null;
    let y = null;

    let resultado = (y===x);

    return resultado;
}

console.log(comparacionIgualdadEstricto())


function compararcionMayorIgual(){

    let x = 1;
    let y = 0;

    let resultado = (x>=y);

    return resultado;
}

console.log(compararcionMayorIgual())


function incremento(){

    let x = 0;

    while(x<5){
        x++
    }

    return x === 5;
}

console.log(incremento())


function decremento(){

    let x = 10;

    while(x>5){
        x--
    }

    return x === 5;
}

console.log(decremento())

function igualdadIncremento(){

    let x = 4;

    return ++x === 5;
    // EL ++ si va antes te suma en la linea
}

console.log(igualdadIncremento())

function comparacionAND(){
    var x = "1";
    var y = "2";
    var resultado;

    if(x==="1" && y==="2"){
        resultado=true;
    }

    return resultado;
}

console.log(comparacionAND())

function comparacionOR(){
    var x = "1";
    var y = "2";
    var resultado;

    if(x==="3" || y==="2"){
        resultado=true;
    }

    return resultado;
}

console.log(comparacionOR())

function comparacionNOT(){
    var x = "2";
    var resultado;

    if (x!=="3"){
        resultado=true;
    }

    return resultado;
}
console.log(comparacionNOT());