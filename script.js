const boton = document.querySelector("#btn-confirmar");
const mensaje = document.querySelector("#mensaje");

function confirmarEncargo() {
    mensaje.textContent = "Encargo recibido - te atiende [Giovany Apaza]";
    mensaje.classList.remove("oculto");
}

boton.addEventListener("click", confirmarEncargo);