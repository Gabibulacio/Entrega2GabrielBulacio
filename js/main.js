const productos = [
        { nombre: "sandalias", precio: 4500 },
        { nombre: "botas", precio: 3500 },
        { nombre: "borcegos", precio: 5000 },
        { nombre: "texanas", precio: 2800 },
        { nombre: "zapatillas", precio: 3700 },
];
let carrito = []

let seleccion = prompt ("Hola, ¿desea comprar algun producto? si/no")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese si/no")
    seleccion = prompt("¿Desea realizar una compra? si/no")
}
if(seleccion == "si"){
    alert("A continuacion te mostramos nuestra lista de productos")
    let TodosLosProductos = productos.map ((producto) => producto.nombre + " " + producto.precio + "$" )
    alert (TodosLosProductos.join (" - "))
} else if (seleccion == "no") {
    alert("Gracias por visitar nuestra pagina, te esperamos pronto!")
}
while(seleccion != "no"){
    let producto = prompt ("agrega un producto a tu carrito")
    let precio = 0

if(producto == "sandalias" || producto == "botas" || producto == "borcegos" || producto == "texanas" || producto == "zapatillas"){
    switch(producto) {
        case "sandalias":
        precio = 4500;
        break;
        case "botas":
            precio = 3500;
            break;
        case "borcegos":
            precio = 5000;
            break;
        case "texanas":
            precio = 2800;
            break;
        case "zapatillas":
            precio = 3700;
            break;
            default:
            break;
        }

    let unidades = parseInt(prompt("¿Cuantas unidades?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert("Por el momento no tenemos ese producto")
    }

    seleccion = prompt("¿Queres agregar otro producto?")
    
    while(seleccion == "no"){
        alert("Gracias por elegir nuestros zapatos")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            Total a pagar  ${carritoFinal.unidades * carritoFinal.precio} `)
        })
        break;

    }
}

const total = carrito.reduce((acc,el) => acc + el.precio * el.unidades, 0 )
console.log(`El total a pagar por su compra es: ${total}`)

