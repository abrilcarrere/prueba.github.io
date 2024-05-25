console.log("HOLA MUNDO");

var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("email");
var input_ciudad = document.getElementById("ciudad");
var form_submit = document.getElementById("miFormulario");

// Función para validar que el valor solo contiene letras y espacios
function validarSoloTexto(valor) {
    var regex = /^[a-zA-Z\s]+$/;
    return regex.test(valor);
}

// Función para validar el formato de email
function validarEmail(valor) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
}

form_submit.addEventListener("submit", function(event) {
    event.preventDefault(); 
    console.log("hicimos click");

    var valor_nombre = input_nombre.value;
    var valor_email = input_email.value;
    var valor_ciudad = input_ciudad.value; 

    var valid = true; // Bandera para verificar si todos los campos son válidos

    // Validación de los campos
    if (!validarSoloTexto(valor_nombre)) {
        console.log("El campo de nombre solo debe contener letras y espacios.");
        input_nombre.classList.add("input-error");
        valid = false;
    } else {
        input_nombre.classList.remove("input-error");
    }

    if (!validarEmail(valor_email)) {
        console.log("El campo de email debe tener un formato válido.");
        input_email.classList.add("input-error");
        valid = false;
    } else {
        input_email.classList.remove("input-error");
    }

    if (valor_ciudad === "") {
        console.log("Debes seleccionar una ciudad.");
        input_ciudad.classList.add("input-error");
        valid = false;
    } else {
        input_ciudad.classList.remove("input-error");
    }

    if (!valid) {
        return; // No continuar si alguna validación falla
    }

    console.log(valor_nombre);
    console.log(valor_email);
    console.log(valor_ciudad); 

    var placeholder_nombre = document.getElementById("nombre-placeholder");
    var placeholder_email = document.getElementById("email-placeholder");

    placeholder_nombre.textContent = valor_nombre;
    placeholder_email.textContent = valor_email;

    var elemento_feedback = document.getElementById("feedback");
    elemento_feedback.classList.add("mostrar-feedback");

    var elementosOcultos = document.querySelectorAll('.ocultar-en-feedback');
    elementosOcultos.forEach(function(elemento) {
        elemento.classList.add('oculto'); // Oculta los elementos adicionales
    });
});

var botonComenzar = document.getElementById('boton-loquiero');
botonComenzar.addEventListener('click', function() {
    var siguienteSeccion = document.getElementById('formulario');
    siguienteSeccion.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
});

document.addEventListener("DOMContentLoaded", function() {
    var resetButton = document.getElementById('volver');
    resetButton.addEventListener('click', function() {
        window.location.reload(); 
    });
});
