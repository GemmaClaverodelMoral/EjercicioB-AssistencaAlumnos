function resolverProblemaB() {
    let cantidad = prompt("¿cuantos alumnos son?");
    let alumnos = [];

    for (i = 0; i < cantidad; i++) {
        alumnos[i] = [prompt("Nombre del alumno " + (i+1)),0];
    }

    const tomarAsistencia = (nombre,p)=>{
        let presencia = prompt(nombre + ": ¿Presente? (P/A)").toUpperCase();
        if (presencia == "P") {
            alumnos[p][1]++;
        }
    }
    let diasClase = 30;
    let maxInasist = 18;
    for (i = 0; i < diasClase; i++) {
        for (alumno in alumnos) {
        tomarAsistencia(alumnos[alumno][0],alumno);
        }
    }

    for (alumno of alumnos) {
        let resultado = "";
        if (diasClase - alumno[1] > maxInasist) {
            resultado = `${alumno[0]}:<br>
            ________Presentes: <b>${alumno[1]}</b> <br>
            ________Ausencias: <b>${diasClase - alumno[1]}</b> </b>
            <b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>`;
        } else {
            resultado = `${alumno[0]}:<br>
            ________Presentes: <b>${alumno[1]}</b> <br>
            ________Ausencias: <b>${diasClase - alumno[1]}</b> </b><br><br>`;
        }
        agregarContenido(resultado)
    }
}

function agregarContenido(mensaje) {
    // Crear un nuevo elemento de párrafo
    var parrafo = document.createElement("p");
    // Agregar el mensaje como contenido de texto al párrafo
    parrafo.innerHTML = mensaje;
    // Agregar el párrafo al final del cuerpo del documento
    document.body.appendChild(parrafo);
};