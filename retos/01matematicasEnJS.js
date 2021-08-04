function limpiaCampos(){
    document.getElementById('formulario').reset();
}

function muestraMensaje(Area, Perimetro, Figura){
    alert(`El área del ${Figura} es = ${Area} y su perimetro es = ${Perimetro}`);
}

function realizaAreaYPerimetro(L1, L2, L3, Figura){
    let area;
    let perimetro;

    switch(Figura){
        case 'equilatero':
            area = ( L3 * L1 ) / 2;
            perimetro = L3 * 3;
            muestraMensaje(area, perimetro, Figura);
            break;
        case 'isosceles':
            area = ( L3 * L1 ) / 2;
            perimetro = L3 * 3;
            muestraMensaje(area, perimetro, Figura);
            break;
        case 'cuadrado':
            area = L1 * L1;
            perimetro = L1 * 4;
            muestraMensaje(area, perimetro, Figura);
            break;
        case 'circulo':
            area = Math.PI * Math.pow(L1, 2);
            perimetro = 2 * Math.PI * L1;
            muestraMensaje(area, perimetro, Figura);
            break;
    }
}

// triangulo inicio
function habilitaFifuras() {
    const lado1 = document.getElementById('lado1').value; //lado 1 cuadro, altura, radio
    const lado2 = document.getElementById('lado2').value; //lado2 triángulo
    const lado3 = document.getElementById('lado3').value; //lado 3 triángulos, base
    
    const equilatero = document.getElementById('equilatero');
    const isosceles = document.getElementById('isosceles');
    const cuadarado = document.getElementById('cuadrado');
    const circulo = document.getElementById('circulo');
    // debugger;
    if(equilatero.checked){
        realizaAreaYPerimetro(lado1, '', lado3, equilatero.name);
    }

    if(isosceles.checked){
        realizaAreaYPerimetro(lado1, '', lado3, isosceles.name);
    }

    if(cuadarado.checked){
        realizaAreaYPerimetro(lado1, '', '', cuadarado.name);
    }

    if(circulo.checked){
        realizaAreaYPerimetro(lado1, '', '', circulo.name);
    }
}