function ejecutar(numeroEjercicio) {
    if (numeroEjercicio === 4) {
        listarImpares();
    }
}
function listarImpares() {
    for (let i = 1; i <= 7; i += 2) {
        console.log(i);
    }
}