document.addEventListener("DOMContentLoaded", function() {
    // Obtiene una referencia al formulario de suscripción
    const subscriptionForm = document.querySelector("form");

    // Agrega un evento de escucha para la presentación del formulario
    subscriptionForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de inmediato

        // Valida el correo electrónico ingresado
        const emailInput = subscriptionForm.querySelector("input[type='email']");
        const emailValue = emailInput.value.trim();

        if (!isValidEmail(emailValue)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            emailInput.focus();
        } else {
            // Aquí puedes realizar otras acciones, como enviar el formulario a un servidor, almacenar la dirección de correo electrónico, etc.
            alert("¡Gracias por suscribirte!");
            subscriptionForm.reset(); // Limpia el formulario
        }
    });

    // Función para validar un correo electrónico usando una expresión regular simple
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    // Botón para mostrar u ocultar la sección FAQ
    const toggleFaqButton = document.querySelector("#toggle-faq");
    const faqSection = document.querySelector("#faq-section");

    toggleFaqButton.addEventListener("click", function() {
        if (faqSection.style.display === "none" || faqSection.style.display === "") {
            faqSection.style.display = "block";
        } else {
            faqSection.style.display = "none";
        }
    });

    // Botón para simular el envío del formulario
    const simulateSubmitButton = document.querySelector("#simulate-submit");

    simulateSubmitButton.addEventListener("click", function() {
        const emailInput = subscriptionForm.querySelector("input[type='email']");
        emailInput.value = "ejemplo@correo.com";
        subscriptionForm.dispatchEvent(new Event("submit"));
    });
});
