/* Total de puntos 100
Los ejercicios tienen un valor de 2 puntos a excepción de:
operadoresLogicos
esVerdadero
doWhile
diaDeLaSemana
nuevoUsuario
tieneEmail
verificarPassword
Estos ejercicios Tienen un puntaje de 6 puntos */

  function devolverString(str) {
    return str;
  }




  function suma(x, y) {
    return x + y;
  }

  function resta(x, y) {
    return x - y;
  }

  function multiplica(x, y) {
    return x * y;
  }

  function divide(x, y) {
    return x / y;
  }

  function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    return x === y;
  }
  
  function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    return str1.length === str2.length;
  }



  function menosQueNoventa(num) {
    // Devuelve "true" si el número es menor que noventa
    return num < 90;
  }

  function mayorQueCincuenta(num) {
    // Devuelve "true" si el número es mayor que cincuenta
    return num > 50;
  }


  function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    return x % y;
  }
  

  function esPar(num) {
    // Devuelve "true" si "num" es par
    return num % 2 === 0;
  }
  

  function esImpar(num) {
    // Devuelve "true" si "num" es impar
    return num % 2 !== 0;
  }


  function esPositivo(numero) {
    // Devuelve si el número es positivo, negativo o 0
    if (numero > 0) return "Es positivo";
    if (numero < 0) return "Es negativo";
    return false;
  }


  function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string
    return str + "!";
  }

  function combinarNombres(nombre, apellido) {
    // Combina "nombre" y "apellido" separados por un espacio
    return nombre + " " + apellido;
  }
  
  

  function obtenerSaludo(nombre) {
    // Retorna un saludo con el nombre proporcionado
    return `Hola ${nombre}!`;
  }

  function obtenerAreaRectangulo(alto, ancho) {
    // Calcula y retorna el área de un rectángulo
    return alto * ancho;
  }

  function retornarPerimetro(lado) {
    // Calcula y retorna el perímetro de un cuadrado
    return lado * 4;
  }

  function areaDelTriangulo(base, altura) {
    // Calcula y retorna el área de un triángulo
    return (base * altura) / 2;
  }

  function deEuroAdolar() {
   
    let euro = parseFloat(prompt("Ingrese la cantidad de euros:"));
  
    if (isNaN(euro) || euro < 0) {
      return "Por favor, ingrese una cantidad válida de euros.";
    }
    
    let dolares = euro * 1.2;
    return `La cantidad en dólares es: ${dolares}`;
  }
  console.log(deEuroAdolar());
  
  function esVocal() {
    
    let letra = prompt("Por favor, ingrese una letra:");

    if (letra.length > 1) {
      return "Dato incorrecto: Se ingresó más de un carácter.";
    }
    letra = letra.toLowerCase();
    if (["a", "e", "i", "o", "u"].includes(letra)) {
      return "Es vocal";
    }
    return "Dato incorrecto: No es una vocal.";
  }
  console.log(esVocal());
  

function obtenerMayor(x, y) {
  // Devuelve el mayor de dos números
  return x > y ? x : y;
}


function mayoriaDeEdad(edad) {
  // Comprueba si una persona puede ingresar a un evento
  return edad >= 18 ? "Allowed" : "Not allowed";
}

function conection(status) {
  // Retorna el estado de conexión basado en el número
  switch (status) {
    case 1:
      return "Online";
    case 2:
      return "Away";
    default:
      return "Offline";
  }
}

function saludo(idioma) {
  // Retorna un saludo según el idioma
  switch (idioma) {
    case "aleman":
      return "Guten Tag!";
    case "mandarin":
      return "Ni Hao!";
    case "ingles":
      return "Hello!";
    default:
      return "Hola!";
  }
}

function colors(color) {
  // Retorna un string basado en el color recibido
  switch (color) {
    case "blue":
      return "This is blue";
    case "red":
      return "This is red";
    case "green":
      return "This is green";
    case "orange":
      return "This is orange";
    default:
      return "Color not found";
  }
}

function esDiezOCinco(numero) {
  // Devuelve true si el número es 10 o 5
  return numero === 10 || numero === 5;
}

function estaEnRango(numero) {
  // Devuelve true si el número está entre 20 y 50
  return numero > 20 && numero < 50;
}

function fizzBuzz(numero) {
  // Retorna "fizz", "buzz", "fizzbuzz" o el número según corresponda
  if (numero % 3 === 0 && numero % 5 === 0) return "fizzbuzz";
  if (numero % 3 === 0) return "fizz";
  if (numero % 5 === 0) return "buzz";
  return numero;
}
function operadoresLogicos() {
  //se pide al usuario que ingrese tres valores
  let num1 = parseFloat(prompt("Ingrese el primer número:"));
  let num2 = parseFloat(prompt("Ingrese el segundo número:"));
  let num3 = parseFloat(prompt("Ingrese el tercer número:"));

  // se validan las condiciones
  if (num1 === 0 || num2 === 0 || num3 === 0) return "Error";
  if (num1 < 0 || num2 < 0 || num3 < 0) return "Hay negativos";
  if (num1 > num2 && num1 > num3) return "Número 1 es mayor y positivo";
  if (num3 > num1 && num3 > num2) return num3 + 1;
  return false;
}
// Mostrar por consola
console.log(operadoresLogicos());


function esVerdadero(valor) {
  // Retorna un string según el valor booleano
  return valor ? "Soy verdadero" : "Soy falso";
}


function doWhile(numero) {
  // Aumenta el número en 5, ocho veces
  let contador = 0;
  do {
    numero += 5;
    contador++;
  } while (contador < 8);
  return numero;
}

function diaDeLaSemana(numeroDeDia) {
  // Retorna si es fin de semana o día laboral
  return numeroDeDia === 1 || numeroDeDia === 7 ? "Es fin de semana" : "Es dia Laboral";
}

function nuevoUsuario(nombre, email, password) {
  // Crea y retorna un objeto con los datos de usuario
  return { nombre, email, password };
}


function tieneEmail(usuario) {
  // Comprueba si el usuario tiene un email definido
  return !!usuario.email;
}

function verificarPassword(usuario, password) {
  // Comprueba si la contraseña coincide
  return usuario.password === password;
}







  
