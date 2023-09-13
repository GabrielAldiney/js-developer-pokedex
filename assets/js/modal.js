var modal = document.getElementById("myModal");

const listaPokemon = document.querySelectorAll(".pokemonDetail")

var span = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
