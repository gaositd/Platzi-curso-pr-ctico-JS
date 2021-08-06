// const precioOriginal = 190;
// const descuento = 19;

function calcularPrecioConDescuento(Precio, Descuento){
    const porcentajePrecioConDescuento =  100 - Descuento;
    const precioConDescuento = (Precio * porcentajePrecioConDescuento) / 100;
    const texto = document.getElementById('ResultP');
    //debugger;
    texto.innerText = `El precio original es $${Precio}, el descuento es de ${Descuento}%, precio con descuento es de $${precioConDescuento}`;
    return texto;
}


function onClickButtonPriceDiscount(){

    const inputPrice = document.getElementById('inputPrice');
    const inputDiscount = document.getElementById('inputDiscount');
//debugger;
    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;
    
    if(!isNaN(priceValue) || !isNaN(discountValue)){
        calcularPrecioConDescuento(priceValue,discountValue);
    }else{
        alert('Datos incorrectos, ingresar datos válidos')
    }
}