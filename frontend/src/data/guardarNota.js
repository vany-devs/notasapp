const nota = {
    titulo: "Gym",
    contenido: "Go to the gym",
    fecha: "2025-10-07",
    prioridad: "media",
};

function guardarNota(nota) {
    const nuevaNota = {
        ...nota,
        id: Date.now(),
    };
    console.log("Nota guardada:", nuevaNota);
    return nuevaNota;
}
console.log("Nota a guardar:", nota);
console.log("Iniciando proceso de guardado de nota...");
console.log("Guardando nota...");
guardarNota(nota);