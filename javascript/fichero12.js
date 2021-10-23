var objeto = {clave1: "valor1", clave2: 4444, clave3: "coche"};
console.log(objeto);
console.log(objeto["clave1"]);
console.log(objeto["clave2"]);

objeto["clave3"] = 1234

console.log(objeto)

for (clave in objeto) {
    console.log(clave);
    console.log(objeto[clave]);
}

var objeto2 = {
    color : "rojo",
    numero : 35,
    metodo : function () {
        alert("El color es " + this.color + " y el número es " + this.numero);
    }
}

objeto2.metodo();