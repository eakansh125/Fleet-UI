
const openModalbtn = document.querySelector("#open-modal")

const modal = document.querySelector("#modal-body");

const closeModalbtn = document.querySelector("#close-modal");

const openModal = () => {
    modal.style.display = "block"
}

const closeModal = () => {
    modal.style.display = "none"
}

openModalbtn.addEventListener("click", openModal)

closeModalbtn.addEventListener("click", closeModal)