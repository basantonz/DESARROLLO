valor1 = 1
valor2 = 5
valor3 = 8

function media(valor1, valor2, valor3) {
    suma = parseInt(valor1) + parseInt(valor2) + parseInt(valor3);
    division = suma / 3;
    return division;
}
    console.log("La media aritmetica es: " + media(valor1, valor2, valor3));