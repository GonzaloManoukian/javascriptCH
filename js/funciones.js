/* ===== Simulador de Cuotas ===== */

// let producto = 2000;
// let cuotas = parseInt(prompt(`El saldo de su compra es de $${producto}, desea realizar la compra en 1, 3 o 6 cuotas? Por favor ingrese el numero de cuotas:`));

// function calculoCuotas(producto, cuotas) {
//     return parseFloat((producto / cuotas).toFixed(2));
// }

// switch(cuotas) {
//     case 1:
//         alert(`Usted realizara el pago en una cuota por el valor de $${calculoCuotas(producto, cuotas)}.`);
//         console.log(`1 cuota $${calculoCuotas(producto, cuotas)}`)
//         break;
//     case 3:
//         alert(`Usted realizara el pago en 3 cuotas por el valor de $${calculoCuotas(producto, cuotas)} c/u.`);
//         console.log(`3 cuotas $${calculoCuotas(producto, cuotas)} c/u`)
//         break;
//     case 6:
//         alert(`Usted realizara el pago en 6 cuotas por el valor de $${calculoCuotas(producto, cuotas)} c/u.`);
//         console.log(`6 cuotas $${calculoCuotas(producto, cuotas)} c/u`)
//         break;
//     default:
//         alert(`Valor ingresado Incorrecto. Por favor, intentelo nuevamente`);
//         break;
// }


/* ===== Simulador de Ingreso Sesion ===== */

// function usuario(user, pass) {
//     this.user = user;
//     this.pass = pass;
// }

// let user = prompt(`Ingreses su nombre de usuario`);
// let pass = prompt(`Ingrese su Contraseña`);

// let usuarioActual = new usuario(user, pass);
// console.log(usuarioActual);

// alert(`Bienvendio ${usuarioActual.user}. Que bueno tenerte de vuelta!`);
// console.log(`Usuario Activo: ${usuarioActual.user}`);


/* ===== Funcion Constructora de Productos ===== */

function libro(titulo, autor, editorial, precio) {
    this.titulo = titulo;
    this.autor = autor;
    this.editorial = editorial;
    this.precio = precio;
}

const libro1 = new libro("Cartero", "Charles Bukowski", "Anagrama", 700);
const libro2 = new libro("Viajes por el Scriptorum", "Pual Auster", "Anagrama", 700);
const libro3 = new libro("Seda", "Alessandro Baricco", "Anagrama", 700);


/* ===== Carrito ===== */

let carrito = [];


/* ===== Simulador Agregar ===== */

let agrega = prompt(`Desea agregar un producto? (si/no)`);

while (agrega.toLowerCase() === "si") {
    
    const seleccion = prompt(`Que Libro desea comprar? Elija 1, 2 o 3.`);
    switch(seleccion) {
        case "1":
            carrito.push(libro1);
            agrega = prompt(`Desea agregar otro producto? (si/no)`);
            break;
        case "2":
            carrito.push(libro2);
            agrega = prompt(`Desea agregar otro producto? (si/no)`);
            break;
        case "3":
            carrito.push(libro2);
            agrega = prompt(`Desea agregar otro producto? (si/no)`);
            break;
        default:
            alert(`Valor ingresado Incorrecto. Por favor, intentelo nuevamente`);
            break;
}
}
console.log(carrito)

const spanCarrito = document.querySelector("#carrito_lenght");
spanCarrito.textContent = `${carrito.length}`;

