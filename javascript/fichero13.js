var persona = {
    nombre: "Joao",
    apellidos: "Basanta Alvarado",
    edad: "26",
    info: function(){
        console.log("nombres: " + this.nombre);
        console.log("apellidos: " + this.apellidos);
        console.log("edad: " + this.edad);
    }
}
persona.info();