const lista1 = [100,200,300,500,400];

function mediaAritmetica(){
    const longitud = lista1.length;
    //let sumaLista1 = 0;
    let resultado;
    const span = document.getElementById('resultado');
    //
    // lista1.forEach(elemento => {
    //     sumaLista1 = sumaLista1 + elemento;
    // });
    resultado = lista1.reduce((valorAcumulado = 0,nuevoElemento)=>{
        return valorAcumulado + nuevoElemento;
    });
    //debugger;
    resultado = resultado / longitud;
    span.innerText = resultado;
    return span;
}

function getArray(){
    let span = document.getElementById('arreglo');

    for(let i = 0; i < lista1.length; i++){
        span.innerText = span.innerText +  lista1[i] + ' ';
    }

    getArray2();
    getArray3();

    return span;
}