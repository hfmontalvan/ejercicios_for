function generarTablas() {

    // 1. Capturar la caja de texto del HTML
    let cajaNumero = document.getElementById("txtNumero");
    // 2. El cajaNumero.value recupera en contenido de la caja de texto
    // y parseInt(); lo convertirte a entero
    let numero = parseInt(cajaNumero.value);

    // 3. Capturar el contenedor donde mostraremos la tabla
    let contenedor = document.getElementById("idTabla");

    // 4. Validar que se haya ingresado un número entero positivo
    if (isNaN(numero) || numero < 1) {
        alert("Por favor, ingresa un número válido mayor que cero.");
        return;
    }

    // 5. Crear una variable para acumular el contenido HTML
    let contenido = "";

    // 6. Generar las diez multiplicaciones
    for (let i = 1; i <= 10; i++) {

        let resultado = numero * i;

        contenido +=
            "<div class='fila'>" +
                "<span>" + numero + " × " + i + "</span>" +
                "<strong>" + resultado + "</strong>" +
            "</div>";
    }

    // 7. Mostrar la tabla generada
    contenedor.innerHTML = contenido;

    // 8. Actualizar el título de la tabla
    document.getElementById("titulo-tabla").innerText =
        "Tabla del " + numero;
}