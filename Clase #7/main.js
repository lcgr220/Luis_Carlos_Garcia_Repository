
const boton = document.querySelector("#boton");
const ancho = document.querySelector(".ancho");
const altura = document.querySelector(".altura");
const bcolor = document.querySelector(".color");
const contenedor = document.querySelector("#contenedor");
const texto = document.querySelector(".texto");
const textoDiv = document.querySelector(".texto-div");

boton.addEventListener("click", () => {
  contenedor.style.width = ancho.value;
  contenedor.style.height = altura.value;
  contenedor.style.backgroundColor = bcolor.value;
  contenedor.style.padding = "0 15px";
  contenedor.style.overflowY = "scroll";
  textoDiv.innerHTML = texto.value;
  contenedor.style.color = "white";
  contenedor.style.display = "block";
  contenedor.style.lineHeight = "1.5";
  contenedor.style.transition = "all 2s";

  if (contenedor.style.backgroundColor == "white") {
    contenedor.style.color = "black";
  } else if (contenedor.style.backgroundColor == "") {
    contenedor.style.color = "black";
  }
});