
var openModalbtn = document.querySelector("#open-modal")

var modal = document.getElementById("myModal");

var span = document.querySelector("#close-modal");

const openModal = () => {
    modal.style.display = "block"
}

const closeModal = () => {
    modal.style.display = "none"
}

openModalbtn.addEventListener("click", openModal)

span.addEventListener("click", closeModal)