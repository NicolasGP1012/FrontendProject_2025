const formContact = document.getElementById("formularioContacto"); 

formContact.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre");

    if (!nombre.value.trim()) {
        nombre.classList.add("border-red-500");
    }
});