//código del cuadrado
function areaCuadrado(Lado){
    let mensaje;
    
    if(!isNaN(Lado))
        mensaje = ladoCuadrado * ladoCuadrado;
    else
        mensaje = 'dato inválido';
}

function perimetroCuadrado(Lado){
    let mensaje;
    if(!isNaN(Lado))
        mensaje = ladoCuadrado * 4;
    else
        mensaje = 'dato inválido';
    
    return mensaje;
}

//código del triangulo
function perimetroTriangulo(Lado1, Lado2, Base){
    let mensaje;
    
    if(!isNaN(Lado1) && !isNaN(Lado2) && !isNaN(Base))
        mensaje = Lado1 + Lado2 + Base;
    else
        mensaje = `dato inválido ${Lado1}, ${Lado2}, ${Base} `;

    return mensaje;
}

function areaTriangulo(Base, Altura){
    let mensaje;

    if(!isNaN(Base) && !isNaN(Altura))
        mensaje = (Base * Altura)/2;
    else
    mensaje = `dato inválido ${Base}, ${Altura} `;

    return mensaje;
}

//código del Circulo
function diametroCirculo(Radio){
    return Radio * 2;
}

function perimetroCirculo(Diametro, Pi){
    return Diametro * Pi;
}

function areaCirculo(Pi, Radio){
     return Pi * Math.pow(Radio, 2);
}

//cuadrado
//console.group('cuadrado');
console.groupCollapsed('cuadrado');
const ladoCuadrado = prompt('Medida del los lados del cuadrado');

console.log(`Los lados del cuadrado miden ${ladoCuadrado}m`);
console.log(`El perimetro de cuadrado es ${perimetroCuadrado(ladoCuadrado)}m`);
console.log(`El área del cuadrado es ${areaCuadrado(ladoCuadrado)}m2`);

console.groupEnd();

//Triangulo
console.groupCollapsed('triangulo');
let ladoTriangulo1  = prompt("Medida del lado 1 del triangulo");
const ladoTriangulo2  = prompt("Medida del lado 2 del triangulo");
const baseTriangulo   = prompt("Medida de la base del triangulo");;
const alturaTriangulo =  prompt("Medida de la altura del triangulo");

console.log(`Los lados del triangulo miden ${ladoTriangulo1}m, ${ladoTriangulo2}m, ${baseTriangulo}m y la altura del triangulo es ${alturaTriangulo}m`);
console.log(`EL perímetro del triángulo es ${perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo)}m`);
console.log(`El área del tríangulo es ${areaTriangulo(baseTriangulo, alturaTriangulo)}m2`);
console.groupEnd();

//circulo
console.groupCollapsed('circulo');
const PI = Math.PI; //3.141592 * 3.141592
const radioCirculo = 4;

console.log(`El valor de PI ${PI},\nel radio del círculo es ${radioCirculo}m, \nel díámetro es ${diametroCirculo(radioCirculo)}m, \nel perímetro es ${perimetroCirculo(diametroCirculo(radioCirculo),PI)}m y \nel área es de ${areaCirculo(PI, radioCirculo)}m2 `);

console.groupEnd();