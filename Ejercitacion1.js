//*  VARIABLES / TIPOS DE DATOS / OPERADORES / OBJETOS */

//* Precalentamos: */

// Crea una variable "string", puede contener lo que quieras:
let Nombre = "Estrella"

// Crea una variable numérica, puede ser cualquier número:
let num1= 13

// Crea una variable booleana:
let LeGustaCocinar= false

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - null === 5;
console.log(nuevaResta)
//Respuesta es FALSE 

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = null * 4 === 40 ;
console.log(nuevaMultiplicacion)
//RESPUESTA= FALSE

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === null;
 console.log(nuevoModulo)
//Respuesta=FALSE
 
/* 01- Realizaste una compra y sabes el precio del producto (inventalo) y su iva (21)%. 
Haz un script que te calcule el precio total que vas a pagar por tu compra.
Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicar precio por el iva y dividir por 100. */

// tu solucion: 

let precio = 80;
let iva = (21 / 100) * precio; 
let sumaIva = precio + iva; 
console.log(sumaIva); 



/* 02- En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
el area la calculas como lado multiplicado por lado. El perémetro es la suma de los cuatro lados. */

/* Ayuda:
Lado 40
El area es 1600
El perímetro es 169 */

// tu solucion: 

let L = 60;   //L= medida de lado del cuadrado
let Area =L*L;  // calculamos area
let Perimetro= L*4;  //Calculamos perimetro
//Mostramos resultados
console.log("El Area es: ",Area);
console.log("El Perimetro es: ",Perimetro);

/* 03- Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.
Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre" */

/*Ayuda:
 Aparecerá el prompt y el usuario escribirá su nombre:
Usuario escribe juan
Hola Juan. */

// tu solucion: 

let nombre = prompt ("Bienvenidx, Por favor ingresa tu nombre:")
console.log("Hola " + nombre + ".")

/* 04- En este ejercicio vas a pedir a una persona que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3. */

/* Ayuda:
Si la persona teclea:
3
2
4
La media de los números es 3. */

// tu solucion: 
// usuario ingresa numeros por consola 
let num1 = parseInt(prompt("Por favor, ingrese el primer número entero: "));
let num2 = parseInt(prompt("Ingrese el segundo número entero: "));
let num3 = parseInt(prompt("Ingrese el tercer número entero: "));

let media = (num1 + num2 + num3) / 3; // calculo de media 
console.log("La media de los tres números es:", media);

/* 05-Escribe un programa que solicite a una persona ingresar el número de kilómetros recorridos por su coche.
 El script debe mostrar el consumo de combustible por kilómetro.
Un problema matemático muy simple numero de litros dividido por número de kilómetros. */

/*Ayuda:
La persona teclea
Num de litros: 20
Num de kilómetros: 80
Has consumido 4 l/km */

// tu solucion: 
// Se pide al usuario que ingrese litros cargados y km recorridos 
let numLit = parseInt(prompt("Ingrese la cantidad de combustible cargado en litros:  "));//Litros cargados
let numKm = parseInt(prompt("Ingrese los KM recorridos: "));//km recorridos

let consume = numLit / numKm; // calcula consumo de combustible 
console.log("Has consumido: ", consume , " L/Km");

/* 06- Cambio de unidades: en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
Recuerda una hora son 6o minutos y cada minuto son 60 segundos. */

/* Ayuda:
horas : 2
minutos 30
Resultado 2*60*60 + 30*60 = 9000 segundos */

/* tu solucion:  */
//se pide al usuario que ingrese hora y segundos 
let hor = parseInt(prompt("Ingrese Hora: ")); // Hora ingresada
let min = parseInt(prompt("Ingrese Minutos: ")); // Minutos ingresados

// Se calcula el total en segundos
let seg = ((hor * 60) * 60) + (min * 60); 
console.log("Respuesta: ", seg, " segundos");


/* 7-Una tortilla de paas lleva 200 gramos de papas por persona. Por cada kilo de papas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias */

/* Ayuda:
.5 comensales,
Se necesitará:
1 kg de papas
5 huevos
300 gr de cebolla */

/* tu solucion: */

//se pide al usuario que ingrese cantidad de comensales
let Comensales = parseInt(prompt("ingrese catidad de comensales: ")); 
let huevo = 1; //1 kg= 1000gr / huevos por persona= 5 huevos/ 1000 gr de papa =200 gr de papa = 1 huevo x persona
let papa= 200;
let cebolla= 60 ; //cebolla por persona = (300 gr  de cebolla * 200 gr de papa) / 1000 gr de papa=60 gr de cebolla x persona 
// Se calcula  ingredentes necesarios
let huevo1= huevo * Comensales
let cebolla1= cebolla * Comensales
let papa1= papa * Comensales
//muestro resultado por consola
console.log("La cantidad de ingredientes que se necesitan en total son: ", papa1, " Gr de papa, ",cebolla1," Gr de cebolla y ", huevo1, " Huevos."  );

/* 8/No todo van ser números. Escribe un código que dado un número nos devuelva true si es un número par y false si es un número impar. No usar condiconales. */

/* Ayuda: */
/* numero: 50
¿Es par? : true */

// tu solución
// Se pide al usuario que ingrese un numero entero
let numero = parseInt(prompt("Ingrese un numero entero: "));
// utilizp operadores de modulo y comparacion estrica, para calcular si es par o impar.
let esPar = numero % 2 === 0;
// se muestra por consola
console.log("¿Es par? :", esPar);

/* 9-vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTML, el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones */

/* ayuda: Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, programacion: 8, HTML: 7. Sacará Nota media de Juan 8
 */

/* tu solucion:*/
//Se pide nombre y notas de alumno por materia 
let nombreAlumno = prompt("Ingrese nombre de alumno:  ");
let ingles = parseInt(prompt("Ingrese nota de ingles: "));
let programacion= parseInt(prompt("Ingrese nota de Programacion: "));
let html= parseInt(prompt("Ingrese nota de HTML: "));
// Se calcula media
let notaMedia= (ingles+programacion+html)/3
//Se muestra resultado por consola
console.log("La nota media de ", nombreAlumno , " es: ", notaMedia, ".");
