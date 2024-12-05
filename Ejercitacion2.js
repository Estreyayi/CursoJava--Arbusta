/* FUNCIONES / CONDICIONALES  */

/* 01-Crea una función que tenga dos argumentos: num1, num2, y que deuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos. 
 */


/* ayuda:
Llamo a la función como sumar(3,5) deberá devolver 8. */

//solucion
function Sumar(num1,num2){
    console.log(num1+num2)
}
Sumar(3,5)

/* 02-Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. */
/* ayuda:Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. */

//solucion:
function esPar(num){
    console.log(" Es par: ", num%2===0 )
}
esPar(2)

/* 03-Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto mutiplo del segundo argumento. */

/* ayuda: Si ejecuto o llamo a la función con esMultiplo(40,4) debe devolver true porque 40 es divisible por 4. */

//solucion
function esMultiplo(num1, num2) {
    console.log("es multiplo: ",num1 % num2 === 0) 
}
esMultiplo(40,4)
esMultiplo(10,5)

/* 04-Escribe una función que recibe como argumento un precio y el porcentaje de impuestos. La función devolverá el valor total a pagar, teniendo en cuenta que al precio se le descuenta un porcentaje del 10% si es mayor de 1000 pesos. */

/* ayuda:Si he comprado por valor de 2000 pesos con un impuesto del 5%, me descuentan un 10% por tanto pago 1800 pesos  más los impuestos que son el 5% de 1800. En total 1890 euros. */

//solucion
let precio = parseFloat(prompt("Bienvenidx, Por favor ingrese el precio:"));
let impuesto = parseFloat(prompt("Ingresa el porcentaje de impuesto:"));

function totalPagar(precio, impuesto) {
    if (precio > 1000) {
        let descuento = precio - (precio * 0.10); // Aplica el descuento del 10%
        let impuestos = descuento * (impuesto / 100); // Calcula el impuesto sobre el precio con descuento
        let total = descuento + impuestos; // Total con descuento e impuestos
        console.log("Total a pagar con descuento: " + total);
    } else {
        let impuestos = precio * (impuesto / 100); // Calcula el impuesto sobre el precio sin descuento
        let total = precio + impuestos; // Total sin descuento
        console.log("Total a pagar sin descuento: " + total);
    }
}
totalPagar(precio, impuesto);

 

/* 05-En esta función se trata de convertir notas a calificaciones literales de manera que menos de 5 es suspenso, un 5 es aprobado, el 6 es bien, el 7 y el 8 son notable, el 9 es sobresaliente y el 10 es matrícula. */
/* Utilizar switch */

function calificar(miCalificacion) {
    let nota = parseFloat(prompt("Bienvenidx, por favor ingrese su nota (entre 1 y 10):"));

    if (nota < 0 || nota > 10) {
        console.log("Error de ingreso de nota. Por favor, ingrese un número entre 1 y 10.");
        return;
    }

    switch (true) {
        case nota < 5:
            console.log("Suspenso");
            break;
        case nota === 5:
            console.log("Aprobado");
            break;
        case nota === 6:
            console.log("Bien");
            break;
        case nota === 7 || nota === 8:
            console.log("Notable");
            break;
        case nota === 9:
            console.log("Sobresaliente");
            break;
        case nota === 10:
            console.log("Matrícula de Honor");
            break;
        default:
            console.log("Error de ingreso de nota. Por favor, ingrese un número entre 1 y 10.");
    }
}

calificar();


/* 06-Escribe una función que devuelva el siglo al que correponde un año que se la pasa como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200.... */

/* ayuda:Por ejemplo si le pido siglo(1910) me dirá siglo 20 */


//solucion
function determinarSiglo(año) {
    if (año <= 0) {
        console.log("El año debe ser mayor a 0.");
        return;
    }

    let siglo = parseInt(año / 100); 
    if (año % 100 !== 0) {          
        siglo += 1;
    }

    console.log(`El año ${año} pertenece al siglo ${siglo}.`);
}

let año = prompt("Bienvenidx, por favor ingrese el año:");
determinarSiglo(año);


/* 07-crear Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo */

/* ayuda: Si num es 2 debe decir que num es positivo */

//solucion:
let num = parseFloat(prompt("Hola, ingrese un número"));
let resultado = num >= 0 ? "Es Positivo" : "Es Negativo"; 

console.log(resultado); 

/* 08 -En este ejemplo la persona entrará dos números. Debe devvolver la diferencia entre el mayor y el menor */

/* ayuda: Si  la persona elige entre el 5 y el 8, el programa devolverá 3 (8 - 5) */
let num1 = parseFloat(prompt("Hola, ingrese el mayor valor numerico"));
let num2 = parseFloat(prompt("ingrese el menor valor numerico: "));
let resultado = num1 - num2 ? "la diferencia es:", resultado : "Por favor, ingrese valores validos"; 

console.log(resultado); 

//solucion
let num1 = parseFloat(prompt("Hola, ingrese el mayor valor numerico"));
let num2 = parseFloat(prompt("Ingrese el menor valor numerico: "));
let resultado;

if (num1 && num2) {
    resultado = `La diferencia es: ${num1 - num2}`;
} else {
    resultado = "Por favor, ingrese valores válidos";
}

console.log(resultado);

/* 09-Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio. El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y  Notable por encima de 7. */

/* ayuda: Para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable */

 //solucion:

let trimestre1 = parseFloat(prompt("Ingrese la nota del primer trimestre:"));
let trimestre2 = parseFloat(prompt("Ingrese la nota del segundo trimestre:"));
let trimestre3 = parseFloat(prompt("Ingrese la nota del tercer trimestre:"));

let promedio = (trimestre1 + trimestre2 + trimestre3) / 3;

let resultado;

if (promedio < 5) {
    resultado = "Suspenso";
} else if (promedio >= 5 && promedio <= 7) {
    resultado = "Aprobado";
} else if (promedio > 7) {
    resultado = "Notable";
}

console.log(`El promedio es: ${promedio}. Resultado: ${resultado}`);


/* 10- Considera estás desarrollando un script donde trabajas con tipos de motor (suponemos que se trata del tipo de motor de una bomba para mover fluidos). Crea una función denominada dimeTipoMotor() donde pidas el tipo de motor al usuario (indicando que los valores posibles son 1, 2, 3, 4) y a través de un condicional switch hagas lo siguiente:

a) Si el tipo de motor es 0, mostrar un mensaje indicando “No hay establecido un valor definido para el tipo de bomba”.

b) Si el tipo de motor es 1, mostrar un mensaje indicando “La bomba es una bomba de agua”.

c) Si el tipo de motor es 2, mostrar un mensaje indicando “La bomba es una bomba de gasolina”.

d) Si el tipo de motor es 3, mostrar un mensaje indicando “La bomba es una bomba de hormigón”.

e) Si el tipo de motor es 4,mostrar un mensaje indicando “La bomba es una bomba de pasta alimenticia”.

f) Si no se cumple ninguno de los valores anteriores mostrar el mensaje “No existe un valor válido para tipo de bomba”. */

/* ayuda: utlizar switch */

// solucion

function dimeTipoMotor() {
    let tipoMotor = parseInt(prompt("Ingrese el tipo de motor (1, 2, 3, 4):"));

    switch (tipoMotor) {
        case 0:
            console.log("No hay establecido un valor definido para el tipo de bomba.");
            break;
        case 1:
            console.log("La bomba es una bomba de agua.");
            break;
        case 2:
            console.log("La bomba es una bomba de gasolina.");
            break;
        case 3:
            console.log("La bomba es una bomba de hormigón.");
            break;
        case 4:
            console.log("La bomba es una bomba de pasta alimenticia.");
            break;
        default:
            console.log("No existe un valor válido para tipo de bomba.");
            break;
    }
}

dimeTipoMotor();
