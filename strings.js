/* Ejercicios
1. Realiza un script que pida un texto y lo muestre en mayúsculas.
Investigar e implementar:  .toUpperCase */

function mostrarMayusculas() {
    let texto = prompt("Introduce un texto:");
    if (texto) {
        console.log("Texto en mayúsculas:", texto.toUpperCase());
    } else {
        console.log("No se ingresó ningún texto.");
    }
}
mostrarMayusculas();

/* 2. Realiza un script que cuente el número de vocales que tiene un texto. */
function contarVocales() {
    const texto = prompt("Introduce un texto:");
    if (texto) {
        let totalVocales = 0;
        const vocales = "aeiouáéíóúüAEIOUÁÉÍÓÚÜ";

        /
        for (let i = 0; i < texto.length; i++) {
            if (vocales.includes(texto[i])) {
                totalVocales++; 
            }
        }

        console.log(`El texto tiene ${totalVocales} vocales.`);
    } else {
        console.log("No se ingresó ningún texto.");
    }
}

contarVocales();

/*     3. Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”. */

unction invertirTexto() {
    const texto = prompt("Introduce un texto:");
    if (texto) {
        const textoInvertido = texto.split("").reverse().join("");
        console.log("Texto invertido:", textoInvertido);
    } else {
        console.log("No se ingresó ningún texto.");
    }
}
invertirTexto();

