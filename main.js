/*Tarjeta*/

let datos = [];
let indice = 0;
// Carga de DATOS //
fetch("datos.json")
  .then((response) => {
    if (!response.ok) throw new Error("Error al cargar el JSON");
    return response.json();
  })
  .then((data) => {
    datos = data.clientes;
    //console.log("Datos cargados:", data);
    MostrarTarjeta();
  })
  .catch((error) => console.error("Error:", error));

function MostrarTarjeta() {
  if (!datos.length) return;
  const contenedor = document.getElementById("contenidotarjetas");
  contenedor.innerHTML = "";

  for (let i = -2; i <= 2; i++) {
    const pos = (indice + i + datos.length) % datos.length;
    const cliente = datos[pos];
    if (!cliente) continue;
    const card = document.createElement("div");
    card.className = "card";
    if (i === 0) card.classList.add("tarjetaprincipal");

    card.innerHTML = `<h3 class="nombrecliente">${cliente.nombre}</h3>
     
    
  ${
    cliente.imagen
      ? `<img src="${cliente.imagen}" alt="${cliente.nombre}" class="imagen-cliente">`
      : ""
  }
`;
    contenedor.appendChild(card);
  }
  MostrarBotones();
}

function moverIzquierda() {
  indice = (indice - 1 + datos.length) % datos.length;
  MostrarTarjeta();
}

function moverDerecha() {
  indice = (indice + 1) % datos.length;
  MostrarTarjeta();
}

function MostrarBotones() {
  //selecciona el div y genera un div vacio
  const contenedorbotones = document.getElementById("contenedorbotones");
  contenedorbotones.innerHTML = "";

  //recorre el div por cada uno de los elementos de datos
  for (let i = 0; i < datos.length; i++) {
    const boton = document.createElement("button");
    boton.className = "botonabajo";
    boton.id = i;
    //inserta el boton
    //selecciona la card al boton correspondiente
    boton.onclick = () => {
      indice = i;
      MostrarTarjeta();
    };
    contenedorbotones.appendChild(boton);

    if (i === indice) boton.classList.add("botonseleccionado");
  }
}

MostrarTarjeta();
