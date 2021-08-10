let lista2 = [300,500,200,100];

const mitadLista2 = parseInt(lista2.length / 2);

let mediana;

function esPar(numero){
    let numPar;

    if( (mitadLista2 % 2) === 0){
        //Sí lista2 es par, es necesario 2 elementos ->Promedio y Mediana
        numPar = true;
    }else{
        //Sí es impar, posición mitad lista2 dentro de lista2, es decir, sin son 5 números el 3ro es la mitad ->Mediana
        numPar = false;
    }

    return numPar;
}

function resultados(){
    
    let resultado2 = document.getElementById('resultado2');

    lista2 = lista2.sort();
    
    if(esPar(lista2.length)){
        const elemento1 = lista2[mitadLista2];
        const elemento2 = lista2[mitadLista2 - 1];
        
        mediana = (elemento1 + elemento2) / 2;
    }else{

        mediana = lista2[mitadLista2];
    }
    
    resultado2.innerText = mediana;
    return resultado2;
}

function getArray2(){
    let span = document.getElementById('arreglo2');

    for(let i = 0; i < lista2.length; i++){
        span.innerText = span.innerText +  lista2[i] + ' ';
    }

    return span;
}