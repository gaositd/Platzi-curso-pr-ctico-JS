const lista3 = [1,6,1,9,0,5,8,1,2,6,9,2,7,5,3,1,5,4,7,9,3,2,5,6,4,2];
const Moda = [];
const lista3Count = {};

function Modas(){
    
    let modas;

    lista3.map((elemento)=>{
        if(lista3Count[elemento]){
            lista3Count[elemento]+=1;
        }else{
            lista3Count[elemento] = 1;
        }
    });

    const lista3_1 = Object.entries(lista3Count).sort((a,b)=>{
        return a[1] - b[1];
    });
    
    const moda = lista3_1[lista3_1.length - 1];
    cadena = [];
    let i = lista3_1.length - 1;
    
    while( i > -1){
        cadena = lista3_1[i];
        if(cadena[1] === moda[1]){
            Moda.push(cadena);
            cadena = [];
        }
        i--;
    }
    
    modas = document.getElementById('resultado3');
    for(let i = 0; i < Moda.length; i++){
        modas.innerText = modas.innerText + Moda[i]+" veces repetido,\n";
    }
    return modas;
}

function getArray3(){
    let span = document.getElementById('arreglo3');
    lista3.forEach(elemento => {
        span.innerText = span.innerText + elemento + ', ';
    });

    return span;
}