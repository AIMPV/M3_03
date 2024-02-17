const div = document.querySelector('#key');
const appendDiv = document.querySelector('.append_div');

let color = "";
document.addEventListener("keydown", function (e) {
  if (event.key === "a") {
    div.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    div.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    div.style.backgroundColor = "lightblue";
  } else if (event.key === "q") {
    crearNuevoDiv("purple");
  } else if (event.key === "w") {
    crearNuevoDiv("brown");
  } else if (event.key === "e") {
    crearNuevoDiv("grey");
  }

  function crearNuevoDiv(color) {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("border", "rounded", "mx-2", "square");
    nuevoDiv.style.backgroundColor = color;
    appendDiv.appendChild(nuevoDiv);
  }
});
