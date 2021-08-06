// const precioOriginal = 190;
// const descuento = 19;

function calcularPrecioConDescuento(Precio, Descuento){
    const porcentajePrecioConDescuento =  100 - Descuento;
    const precioConDescuento = (Precio * porcentajePrecioConDescuento) / 100;
    // console.log(`El precio original es $${precioOriginal}, el descuento es de ${descuento}%, precio con descuento es de $${precioConDescuento}`);
    return `El precio original es $${Precio}, el descuento es de ${Descuento}%, precio con descuento es de $${precioConDescuento}`;
}

calcularPrecioConDescuento(190,19);