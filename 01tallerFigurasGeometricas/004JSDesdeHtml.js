//código del cuadrado
function areaCuadrado(Lado){
    let mensaje;
    
    if(!isNaN(Lado))
        mensaje = Lado * Lado;
    else
        mensaje = 'dato inválido';

    return mensaje;
}

function perimetroCuadrado(Lado){
    let mensaje;
    if(!isNaN(Lado))
        mensaje = Lado * 4;
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

console.groupEnd();

//Triangulo
console.groupCollapsed('triangulo');
console.groupEnd();

//circulo
console.groupCollapsed('circulo');
const PI = Math.PI; //3.141592 * 3.141592
const radioCirculo = 4;

console.groupEnd();

//Empieza la interacción con HTML
//cuadrado
const input = document.getElementById("InputCuadrado");
const valor = input.value;
const perimetro = perimetroCuadrado(valor);

function calcularPerimetroCuadrado(){
    alert(`Los lados del cuadrado miden ${valor}m\n su perímetro es de ${perimetro}m`);
}

function CalcuarAreaCuadrado(){
    alert(`El área del cuadrado es ${areaCuadrado(valor)}`);
}