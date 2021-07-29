var persona = {
    nombre: 'Alvaro',
    apellido: 'Gamez Chavez',
    usuarioPlatzi: '@gamez.alvaro',
    edad: 43,
    correoE: 'gamez.alvaro@outlook.com',
    mayorDeEdad: true,
    dineroAhorrado: 16758.39,
    deudas: 150000
}

var limite = 0;

const names = 'Daniela Iveth';
const lastName = 'Meraz Silva';
const completeName = names +lastName;
const nickName = 'Dany';

const suscripcion = 'Basic';
const suscripciones = ['Free','Basic','expert','expertplus'];

function nombreCompleto(){
    console.log(`${persona.nombre} ${persona.apellido}`);
}

function dineroReal(){
    let dinero = persona.dineroAhorrado - persona.deudas;
    let mensaje;

    if(dinero <= 0){
        mensaje = 'Debo lana :-(';
    }else{
        mensaje = 'Ando chidote 8-)';
    }

    console.log(mensaje);
}

function nombresCompletos(Nombre, Apellido){
    return `${Nombre} ${Apellido}`;
}

function tipoSuscripcion(Suscripcion){
    let mensaje;

    if(Suscripcion === 'Free'){
        mensaje = 'Solo puedes tomar los cursos gratis';
    }else if(Suscripcion === 'Basic'){
        mensaje = 'Puedes tomar casi todos los cursos de Platzi durante un mes"';
    }else if(Suscripcion === 'expert'){
        mensaje = 'Puedes tomar casi todos los cursos de Platzi durante un año';
    }else if(Suscripcion === 'expertplus'){
        mensaje = 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año';
    }

    return mensaje;

}

function tipoSuscripcionArray(Suscripcion){
    return suscripciones.filter(suscrito => suscrito === Suscripcion)
}

function while1(Limite){
    let i = 0;

    if(!isNaN(Limite)){
        while(i <= Limite){
            console.log(`(Incremento * 1) El valor actual de i es: ${i}`);
            i++;
        }
    }else{
        console.log(`${Limite} no es número, no es posible hacer la suma`);
    }
}

function while2(Limite){
    let i = 0;

    if(!isNaN(Limite)){
        while(Limite){
            console.log(`(Incremento * 1) El valor actual de limite es: ${Limite}`);
            Limite--;
        }
    }else{
        console.log(`${Limite} no es número, no es posible hacer la resta`);
    }
}

function pregunta(){
    let respuesta = true;
//   debugger;
    while(respuesta){
        if(confirm('¿La suma de 2 + 2 = 4?')){
            alert('Correcto. Fin del juego');
            respuesta = false;
        }else{
            alert('Incorrecto. Reinica el juego');
        }
    }
}

function arreglosprimerElemento(Arreglo){
    console.log(Arreglo[0]);
}

function arreglosTodosElementos(Arreglo){
    for (let index = 0; index < Arreglo.length; index++) {
        const element = Arreglo[index];
        console.log(element);
    }
}

function leerObjeto(Persona){
    console.log(`${Persona.nombre} ${Persona.apellido} ${Persona.edad} años de edad, su usuario en Platzi es: ${Persona.usuarioPlatzi} ¿Es mayor de edad? ${Persona.mayorDeEdad}, tiene ahorrado ${Persona.dineroAhorrado.toLocaleString('mx', { style: 'currency', currency: 'MXN' })} y debe ${Persona.deudas.toLocaleString('mx', { style: 'currency', currency: 'MXN' })}.`);
}

console.log(`Mi nombre es ${nombresCompletos(names, lastName)}, pero prefiero que me digas ${nickName}.`);

console.log(`Tienes una suscripción ${suscripcion}. ${tipoSuscripcion(suscripcion)}.`);
console.log(` parte 2. Tienes una suscripción ${suscripcion}. ${tipoSuscripcionArray(suscripcion)}.`);

limite = prompt('límite del cliclo while 1');
while1(limite);
while2(limite);

pregunta();
arreglosprimerElemento(suscripciones);
arreglosTodosElementos(suscripciones);
leerObjeto(persona);