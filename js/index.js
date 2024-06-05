const edades = [];

function verificarEdad() {
    const edadInput = document.getElementById("inputEdad").value;
    const edad = parseInt(edadInput, 10);
    const resultado = document.getElementById("resultado");

    if (isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
    } else {
        if (edad >= 18) {
            resultado.innerText = "¡Bienvenido! Puedes ingresar a la web.";
        } else {
            resultado.innerText = "Lo siento, debes ser mayor de 18 años para ingresar a la web.";
        }
    }
}

function agregarEdad() {
    const edadInput = document.getElementById("edadNueva").value;
    const edad = parseInt(edadInput, 10);

    if (isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
    } else {
        edades.push(edad);
        const lista = document.getElementById("edadesLista");
        const elementoLista = document.createElement("li");
        elementoLista.innerText = "Edad: " + edad;
        lista.appendChild(elementoLista);
    }
}

function calcularEdadPromedio() {
    if (edades.length === 0) {
        alert("Por favor, ingrese al menos una edad antes de calcular el promedio.");
    } else {
        let sumaEdades = 0;
        for (let i = 0; i < edades.length; i++) {
            sumaEdades += edades[i];
        }
        const promedio = (sumaEdades / edades.length).toFixed(2);
        document.getElementById("resultado").innerText = "La edad promedio de las personas ingresadas es: " + promedio;
    }
}


