document.addEventListener("DOMContentLoaded", function () {

    const quoteForm = document.getElementById("quote-form");
    const whatsappButton = document.getElementById("whatsapp-submit");

    if (!quoteForm || !whatsappButton) {
        return;
    }

    whatsappButton.addEventListener("click", function () {

        if (!quoteForm.reportValidity()) {
            return;
        }

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        const whatsappMessage =
            "NEW QUOTE REQUEST - DIKOBE STRATEGIC VENTURES\n\n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Phone Number: " + phone + "\n" +
            "Service Needed: " + service + "\n\n" +
            "Project Details:\n" + message;

        const whatsappURL =
            "https://wa.me/27608763221?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");

    });

});
