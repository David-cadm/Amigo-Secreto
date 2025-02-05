const nombres = [];

function mostrarMensajeError(mensaje) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li style="color: red;">${mensaje}</li>`;
}

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (nombres.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    nombres.push(nombre);

    // Crear un nuevo elemento de lista y agregarlo al DOM
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    listaAmigos.appendChild(nuevoElemento);

    input.value = ""; // Limpiar el campo de entrada
}

function sortearAmigo() {
    if (nombres.length < 2) {
        mostrarMensajeError("Debe haber al menos 2 nombres para el sorteo.");
        return;
    
    }
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const seleccionado = nombres[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${seleccionado}</strong> 🎉</li>`;
}
