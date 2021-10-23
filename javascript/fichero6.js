    maximo = parseInt(prompt("Introduce el valor máximo"));
    condicion = false;
    resultado = "";
    contador = 0
   while(!condicion){
     if(contador%2==0){
       resultado = resultado + contador + " ";
     }
     if(contador == maximo){
       condicion = true;
     }
     contador++;
   }
    alert("Los números pares entre 0 y " + maximo + " son:\n " + resultado);
    console.log("Los números pares entre 0 y " + maximo + " son:\n " + resultado);