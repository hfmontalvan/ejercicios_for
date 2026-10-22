function generarTablas() {

    // 1. Capturar los componentes HTML
    let cajaNumero = document.getElementById("txtNumero");
    let contenedor = document.getElementById("idTabla");
    let mensaje = document.getElementById("mensajeNumero");
    let titulo = document.getElementById("titulo-tabla");

    // 2. Recuperar el texto ingresado
    let valor = cajaNumero.value.trim();

    // 3. Limpiar mensajes anteriores
    mensaje.innerText = "";
    mensaje.className = "mensaje";
    cajaNumero.classList.remove("input-error");

    // 4. Validar que la caja no esté vacía
    if (valor === "") {

        mensaje.innerText = "Debes ingresar un número.";
        mensaje.classList.add("error");
        cajaNumero.classList.add("input-error");
        cajaNumero.focus();
        return;
    }

    // 5. Convertir el texto a número
    let numero = Number(valor);

    // 6. Validar que sea un entero positivo
    if (!Number.isSafeInteger(numero) || numero <= 0) {

        mensaje.innerText =
            "Ingresa un número entero mayor que cero.";

        mensaje.classList.add("error");
        cajaNumero.classList.add("input-error");
        cajaNumero.focus();
        return;
    }

    // 7. Crear variable para acumular HTML
    let contenido = "";

    // 8. Generar las multiplicaciones
    for (let i = 1; i <= 10; i++) {

        let resultado = numero * i;

        contenido +=
            "<div class='fila'>" +
                "<span>" + numero + " × " + i + "</span>" +
                "<strong>" + resultado + "</strong>" +
            "</div>";
    }

    // 9. Mostrar el contenido generado
    contenedor.innerHTML = contenido;

    // 10. Actualizar el título
    titulo.innerText = "Tabla del " + numero;

    // 11. Mostrar confirmación
    mensaje.innerText =
        "¡Tabla del " + numero + " generada correctamente!";

    mensaje.classList.add("exito");
}