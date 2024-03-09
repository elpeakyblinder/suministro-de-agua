document.addEventListener("DOMContentLoaded", function() {
    var texto = "Sientase seguro del control constante de tu agua";
    var textoEscrito = document.getElementById("texto-escrito");
    var cursor = document.getElementById("cursor");
    var velocidadEscritura = 100; // Velocidad de escritura en milisegundos
    var index = 0;

    function escribirTexto() {
        if (index < texto.length) {
            textoEscrito.textContent += texto.charAt(index);
            index++;
            setTimeout(escribirTexto, velocidadEscritura);
        } else {
            cursor.style.animation = 'none'; // Detiene la animación al finalizar la escritura
        }
    }

    // Comienza a escribir el texto cuando el DOM está cargado
    escribirTexto();
});


// Declarar la variable slideIndex para rastrear el índice del slide actual
var slideIndex = 1;
showSlides(slideIndex);

// Función para avanzar o retroceder en el slider
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Función para mostrar el slide actual
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-img");

    // Verificar si se ha llegado al final de las imágenes
    if (n > slides.length) {
        slideIndex = 1;
    }
    // Verificar si se ha retrocedido desde el primer slide
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Ocultar todas las imágenes
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Oculta todas las imágenes
    }

    // Mostrar el slide actual
    slides[slideIndex - 1].style.display = "block";
}



