const elemento1 = document.querySelector('#elemento1');
const elemento2 = document.querySelector("#elemento2");
const elemento3 = document.querySelector("#elemento3");
const elemento4 = document.querySelector("#elemento4");

const cambioColor = (event) => {
  event.target.style.backgroundColor = "black";
};
elemento1.addEventListener("click", cambioColor);
elemento2.addEventListener("click", cambioColor);
elemento3.addEventListener("click", cambioColor);
elemento4.addEventListener("click", cambioColor);
