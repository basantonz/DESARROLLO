function media(arreglo){
    var mediaar = 0;    
    for(i=0;i<arreglo.length;i++){
        mediaar = mediaar + arreglo[i];
    }
    mediaar = mediaar / arreglo.length;
    return mediaar
}

array = [1,4,6,2,9,12,45];

console.log("La media es: " + media(array));