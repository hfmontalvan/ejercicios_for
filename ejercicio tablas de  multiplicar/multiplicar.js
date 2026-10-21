function generarTablas() {

    // 1. Capturar el contenedor HTML
    let contenedor = document.getElementById("idTabla");

    // 2. Variable para acumular el código HTML
    let contenido = "";

    // 3. Número de la tabla de multiplicar
    let numero = 3;

    // 4. Generar las diez multiplicaciones
    for (let i = 1; i <= 10; i++) {

        let resultado = numero * i;

        contenido +=
            "<div class='fila'>" +
                "<span>" + numero + " × " + i + "</span>" +
                "<strong>" + resultado + "</strong>" +
            "</div>";

    }

    // 5. Mostrar las operaciones en el HTML
    contenedor.innerHTML = contenido;

}