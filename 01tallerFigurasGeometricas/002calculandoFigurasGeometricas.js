//código del cuadrado
//console.group('cuadrado');
console.groupCollapsed('cuadrado');
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`Los lados del cuadrado miden ${ladoCuadrado}m`);
console.log(`El perimetro de cuadrado es ${perimetroCuadrado}m`);
console.log(`El área del cuadrado es ${areaCuadrado}m2`);

console.groupEnd();

//código del triangulo
console.groupCollapsed('triangulo');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo  = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2  + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;

console.log(`Los lados del triangulo miden ${ladoTriangulo1}m, ${ladoTriangulo2}m, ${baseTriangulo}m y la altura del triangulo es ${alturaTriangulo}m`);
console.log(`EL perímetro del triángulo es ${perimetroTriangulo}m`);
console.log(`El área del tríangulo es ${areaTriangulo}m2`)

console.groupEnd();

//código del circulo
console.groupCollapsed('circulo');
const PI = Math.PI; //3.141592 * 3.141592
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = PI * Math.pow(radioCirculo, 2);

console.log(`El valor de PI ${PI},\nel radio del círculo es ${radioCirculo}m, \nel díámetro es ${diametroCirculo}m, \nel perímetro es ${perimetroCirculo}m y \nel área es de ${areaCirculo}m2 `);

console.groupEnd();