/*Tarjeta*/

const datos = ["Tarjeta 1", "Tarjeta 2", "Tarjeta 3", "Tarjeta 4", "Tarjeta 5"];
let indice = 0;

function MostrarTarjeta() {
  const contenedor = document.getElementById("contenidotarjetas");
  contenedor.innerHTML = "";

  for (let i = -1; i <= 1; i++) {
    const pos = (indice + i + datos.length) % datos.length;
    const card = document.createElement("div");
    card.className = "card";
    if (i === 0) card.classList.add("tarjetaprincipal");

    card.innerHTML = datos[pos];
    contenedor.appendChild(card);
  }
}

function moverIzquierda() {
  indice = (indice - 1 + datos.length) % datos.length;
  MostrarTarjeta();
}

function moverDerecha() {
  indice = (indice + 1) % datos.length;
  MostrarTarjeta();
}

MostrarTarjeta();
