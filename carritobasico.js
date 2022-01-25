console.log("CArrito de compras basico 😁😁😁");

let confirmacion = confirm(
  "Bienvenido al supermecado de YANAMA 🍉🍊🍎, desea comprar alguna fruta?"
);

const listaFrutas = [];

while (confirmacion) {
  const fruta = prompt("¿Que frutas desea  comprar?");
  listaFrutas.push(fruta);
  confirmacion = confirm("Genial¡¡, ¿Desea comprar alguna fruta más?");
}
console.log(listaFrutas.length);

if (listaFrutas.length != 0) {
  // listaFrutas.forEach((frutacomprada) => frutacomprada  );
  alert(
    `usted compró: ${listaFrutas.forEach((frutacomprada) => frutacomprada)}`
  );
} else {
  confirm("gracias por su visita, vuelva pronto");
}

// console.log(fruta);
console.log(listaFrutas);
