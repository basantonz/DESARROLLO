//Código Javascript para los eventos del fichero fichero4.html

var parrafo = document.querySelector("#id1");
var titular3 = document.querySelector("#id2");

//Añadir evento a estos elementos

parrafo.addEventListener('mouseover',function(){
    parrafo.style.color = "green";
    parrafo.style.border = "2px solid green";
});

parrafo.addEventListener('mouseout',function(){
    parrafo.style.color = "black";
    parrafo.style.border = "none";
});

titular3.addEventListener('click',function(){
    titular3.textContent = "Gracias por haber pulsado !!";
    titular3.style.color = "red";
});