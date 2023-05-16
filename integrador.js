// alert("Hola JS");

function calcularPrecioFinal() {
    // en cantEntradas almaceno la cantidad de entradas que ingreso el usuario
    let cantEnt = document.getElementById("cantEntradas").value;

    // en desc almaceno el tipo de usuario y el descuento que eligio el usuario
    let desc = document.getElementById("porcDescuento").value;

    // Obtengo el descuento que hay que realizar
    let descTotal = (cantEnt*1000) * desc/100;

    // resto el descuento total del precio total
    let precioFin = (cantEnt*1000) - descTotal;

    // coloco en el html el calor de las entradas - el descuento
    document.getElementById("precioFinal").value=precioFin;
}