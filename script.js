var modal = document.getElementById("miModal");
var reservar = document.getElementById("reservar");
var span = document.getElementsByClassName("close")[0];

reservar.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
