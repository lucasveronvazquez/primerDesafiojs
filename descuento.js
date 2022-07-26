function calcularDescuento(precio, desc){
  

    let precioConDesc= precio-(precio * desc)/100
    alert("el precio con descuento es de $"+precioConDesc)
    precio = parseFloat(prompt("ingrese el precio del producto"))
    desc = parseFloat(prompt("ingrese el descuento %"))
    calcularDescuento(precio, desc)

}

let precio = parseFloat(prompt("ingrese el precio del producto"))
let desc = parseFloat(prompt("ingrese el descuento %"))

calcularDescuento(precio, desc)

