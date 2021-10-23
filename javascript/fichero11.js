function media(arreglo){
    var mediaar = 0;    
    for(i=0;i<arreglo.length;i++){
        mediaar = mediaar + arreglo[i];
    }
    mediaar = mediaar / arreglo.length;
    return mediaar
}

array = [1,2,3,4,5,6,7,8,9,10];

console.log("La media es: " + media(array));