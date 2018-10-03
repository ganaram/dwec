//PARA INCLUIR COMENTARIOS
/*
*  PARA INCLUIR VARIAS LINEAS DE COMENTARIOS
*
* */


//ESTE SCRITP ES PARA PRACTICAR LAS DECLARACIONES DE VARIABLES

///esta funcion hay que corregirla para poder porbar las demas
function corregirDeclaraciones(){
    var funcion = new Object();
    var ejemplo = "EJEMPLO";
    var prueba = 123;
    var pruebaejemplo = "EJERCICIO";
    var prueba = "PRUEBA";
    var prueba = "PRUEBA";

    return true;
}

console.log(corregirDeclaraciones());

function declararNumeros(){
    let numA = 2;
    let numB = 1;
    return typeof numA === "number"
       && typeof numB === "number"
       && numA > numB;
}

console.log(declararNumeros());

function declararString(){
    let cadena = "PRuEbA";
    return cadena === "PRuEbA"
        && typeof cadena === "string";
}
console.log(declararString());

function noDefinido(){
    var x = null;
    var y = undefined;
    return x === null
        && y === undefined;
}
console.log(noDefinido());

function declararSymbol(){
    let x = Symbol();
    return typeof x === "symbol";
}
console.log(declararSymbol());  

function declararFecha(){
    let hoy = new Date();
    return hoy instanceof Date;

}
console.log(declararFecha());

function declararExpresionRegular(){
    let expresion = new RegExp("[1-9]{3}")
    return expresion instanceof RegExp;
}
console.log(declararExpresionRegular());

function declararFuncion(){
    let funcion = function(){};
    return funcion instanceof Function;
}
console.log(declararFuncion()); 



function declararObjeto(){

    class ObjetoPrueba{};
    let objeto = new ObjetoPrueba();

    return objeto instanceof ObjetoPrueba;
}
console.log(declararObjeto());

function declararArray(){

let lista = [1,2,3,4,"Correcto"];
    return lista instanceof Array
            && lista.length === 5
            && lista[4] === "Correcto";

}
console.log(declararArray());


function declararArrayTipo(){

 let listaEnteros = new Int32Array(10);
    return listaEnteros instanceof Int32Array
            && listaEnteros.length === 10;

}
console.log(declararArrayTipo());


function declararVariableGlobal(){
    window.x = "SOY gLOBAL";

    return window.x
            && x === "SOY gLOBAL"
        ;

}
console.log(declararVariableGlobal());

function declararPrototipo(){

    let prototipo = function(texto){
        this.texto = texto;
    }
    var objeto = new prototipo("ejemplo");


    return objeto.__proto__ === prototipo.prototype

}
console.log(declararPrototipo());

function declaracionConRetraso(){
    var y = 35;

    var resultado = y === 35;

    return resultado;
}
console.log(declaracionConRetraso());


function declaracionLet(){
    let x = 2;
    let y = "";
    if(x > 1){
        y = "bien";
    }
    return y === "bien";
}
console.log(declaracionLet());

function declaracionConst(){
    const valor = 30;
    return valor === 30;
}
console.log(declaracionConst());    

