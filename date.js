/* 1.Realiza un script que escriba en el documento la fecha y hora actual. La salida deberá tener elsiguiente formato:

Hoy es martes, 29 de Marzo de 2022 y son las 14:32 horas. */

function fechaActual() {
    let fechaAhora = new Date();
    let dia = fechaAhora.getDate();
    let mes = fechaAhora.getMonth();
    let anio = fechaAhora.getFullYear();
    
    let meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio", 
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    
    console.log("La fecha de hoy es:", dia, "de", meses[mes], "del año", anio);
}

fechaActual();


/* 2. Realiza un script que pida un nombre y dos apellidos e indique el tiempo que se tardó en introducir los datos. La salida sería algo así como : En introducir Luís Perez Alonso ha tardado 25 segundos. */
   
  function medirTiempo() {
    let tiempoInicial = new Date();
    let Nombre=prompt("Bienvenido, ingrese su nombre: ");
    let apellido1= prompt("Ingrese primer apellido: ");
    let apellido2= prompt("Ingrese segundo apellido: ");
    let tiempoFinal= new Date();
    let tiempoTotal=(tiempoFinal - tiempoInicial)/1000
    console.log("Usted tardo ", tiempoTotal, "segundos.");
}

medirTiempo();

/*     3. Realiza un script pida un mes y año e imprima su calendario. No hace falta esmerarse en la presentación del calendario, el calendario simplificado puede ser del tipo:

OCTUBRE – 2022
1 (miercoles), 2 (jueves), ….. , 31 (viernes). */

function calendario() {
    let mes = parseInt(prompt("Introduce el mes (1-12):"));
    let anio = parseInt(prompt("Introduce el año:"));
    let primerDia = new Date(anio, mes - 1, 1); 
    let diaSemana = primerDia.getDay(); 
    let diasEnElMes = new Date(anio, mes, 0).getDate(); 

    const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

   
    console.log(`Calendario de ${mes} - ${anio}:`);
    let calendario = '';
    for (let i = 1; i <= diasEnElMes; i++) {
        let dia = diasSemana[diaSemana];
        calendario += `${i} (${dia})\n`;

        diaSemana = (diaSemana + 1) % 7;
    }

    console.log(calendario);
}

calendario(); /


