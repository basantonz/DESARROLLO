var mensaje1 = " Pásatelo muy bien"
function hola(nombre,edad){
    var frase = "Hola " + nombre + ", buenos días" + " feliz " + edad + " cumpleaños!!";
    frase = frase + mensaje1;
    return frase;
}

var cadena = hola("Antonio",28);
console.log(cadena);
var cadena = hola("Luis",35);
console.log(cadena);

//console.log(frase)