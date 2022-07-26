function calcularIva (precio){
    let precioConIva=precio * 1.21
    alert ("el precio con IVA inclcuido es $" + precioConIva )
    calcularIva(parseFloat(prompt("Ingrese el precio")));
}

let precio = parseFloat (prompt ("ingrese el precio"))
calcularIva (precio)