var edades = [];

function verificarEdad() {
    var edadInput = document.getElementById("inputEdad").value;
    // Validar que la entrada sea un número y mayor que cero
    if (!isNaN(edadInput) && edadInput > 0) {
        var edad = parseInt(edadInput);
        if (edad >= 18) {
            // Permitir el acceso a la web
            document.getElementById("resultado").innerText = "¡Bienvenido! Puedes ingresar a la web.";
        } else {
            // Rechazar el acceso a la web
            document.getElementById("resultado").innerText = "Lo siento, debes ser mayor de 18 años para ingresar a la web.";
        }
    } else {
        // Alertar si la entrada no es válida
        alert("Por favor, ingrese una edad válida.");
    }
}

function agregarEdad() {
    var edadInput = document.getElementById("edadNueva").value;
    // Validar que la entrada sea un número y mayor que cero
    if (!isNaN(edadInput) && edadInput > 0) {
        var edad = parseInt(edadInput);
        edades.push(edad);
        // Mostrar la edad ingresada en la lista de edades
        var lista = document.getElementById("edadesLista");
        var elementoLista = document.createElement("li");
        elementoLista.appendChild(document.createTextNode("Edad: " + edad));
        lista.appendChild(elementoLista);
    } else {
        alert("Por favor, ingrese una edad válida.");
    }
}

function calcularEdadPromedio() {
    if (edades.length > 0) {
        var sumaEdades = 0;
        // Sumar todas las edades
        for (var i = 0; i < edades.length; i++) {
            sumaEdades += edades[i];
        }
        // Calcular el promedio
        var promedio = sumaEdades / edades.length;
        // Mostrar el resultado
        document.getElementById("resultado").innerText = "La edad promedio de las personas ingresadas es: " + promedio.toFixed(2);
    } else {
        alert("Por favor, ingrese al menos una edad antes de calcular el promedio.");
    }
}