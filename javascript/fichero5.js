var numero1 = prompt("Introduce el primer numero");
var numero2 = prompt("Introduce el segundo numero");
var operacion = prompt("Introduce la operacion que quieres realizar");

if (operacion == "+") {
    resultado = parseInt(numero1) + parseInt(numero2);
}
else if (operacion == "-") {
    resultado = parseInt(numero1) - parseInt(numero2);
}
else if (operacion == "*") {
    resultado = parseInt(numero1) * parseInt(numero2);
}
else if (operacion == "/") {
    resultado = parseInt(numero1) / parseInt(numero2);
}
else {
    alert("No has introducido una operación correcta");
}   
mostrar = "Los números elegidos fueron " + numero1 + " y " + numero2 + ", la operación elegida fue " + operacion + ", por tanto el resultado es " + resultado;
console.log(mostrar);
alert(mostrar);