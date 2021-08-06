const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto"
];

function calcularPrecioConDescuento(Precio, Descuento){
    const porcentajePrecioConDescuento =  100 - Descuento;
    const precioConDescuento = (Precio * porcentajePrecioConDescuento) / 100;
    const texto = document.getElementById('ResultP');
    //debugger;
    texto.innerText = `El precio original es $${Precio}, el descuento es de ${Descuento}%, precio con descuento es de $${precioConDescuento}`;
    return texto;
}

function onClickButtonPriceDiscount(){
    const priceValue = document.getElementById('inputPrice').value;
    const couponValue = document.getElementById('inputCoupon').value;

    let descuento;

    switch(couponValue){
        case 'JuanDC_es_Batman':
            descuento = 15;
            break;
        case 'pero_no_le_digas_a_nadie':
            descuento = 30;
            break;
        case 'es_un_secreto':
            descuento = 25;
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document-getElementById('ResultP');

    resultP.innerText = `El precio con descuento es ${precioConDescuento}`;
}