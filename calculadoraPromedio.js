// Función para ingresar una nota en el rango de 0 a 10

function ingresarNota(mensaje) {
    let nota;
    do {
        nota = parseFloat(prompt(mensaje));
        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert("La nota debe estar en el rango de 0 a 10. Inténtelo de nuevo.");
        }
    } while (isNaN(nota) || nota < 0 || nota > 10);
    return nota;
}

// Ingresar nombre del alumno y materia
    let nombreAlumno = prompt("Ingrese el nombre del alumno:");
    let materia = prompt("Ingrese la materia:");

// Ingresar notas
    let nota1, nota2, nota3;

// Ingresar nota1
    do {
        nota1 = ingresarNota("Ingrese la nota 1:");
    } while (nota1 < 0 || nota1 > 10);

// Ingresar nota2
    do {
        nota2 = ingresarNota("Ingrese la nota 2:");
    } while (nota2 < 0 || nota2 > 10);

// Ingresar nota3
    do {
        nota3 = ingresarNota("Ingrese la nota 3:");
    } while (nota3 < 0 || nota3 > 10);

// Calcular promedio
    let promedio = (nota1 + nota2 + nota3) / 3;

// Determinar si aprobó
    if (promedio >= 7) {
        console.log(`¡Felicidades! ${nombreAlumno}, has aprobado ${materia} con un promedio de ${promedio.toFixed(2)}.`);
    } else {
        console.log(`${nombreAlumno}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido en ${materia} es ${promedio.toFixed(2)}.`);
    }

