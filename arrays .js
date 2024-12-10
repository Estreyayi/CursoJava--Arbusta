  let clasificaciones = [
    "Marcos", 
    "Franco", 
    "Agostina", 
    "Leon", 
    "Juan Cruz", 
    "Eduardo"
];

//clasificación inicial
function mostrarClasificacion() {
    for (let i = 0; i < clasificaciones.length; i++) {
        console.log(clasificaciones[i]);
    }
}

// Modificaciones en el array
// a) Leon adelanta a Agostina
let leonIndex = clasificaciones.indexOf("Leon");
let agostinaIndex = clasificaciones.indexOf("Agostina");
[clasificaciones[leonIndex], clasificaciones[agostinaIndex]] = [clasificaciones[agostinaIndex], clasificaciones[leonIndex]];

// b) Eduardo es descalificado y se elimina
let eduardoIndex = clasificaciones.indexOf("Eduardo");
clasificaciones.splice(eduardoIndex, 1);

// c) Julieta y Martina se intercalan entre Marcos y Franco
clasificaciones.splice(1, 0, "Julieta", "Martina");

// d) Alicia encabeza la clasificación
clasificaciones.unshift("Alicia");

//clasificación actualizada
mostrarClasificacion();
