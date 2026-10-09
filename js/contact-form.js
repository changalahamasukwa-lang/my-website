"use strict";

const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");
const preview = document.getElementById("message-preview");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const topicInput = document.getElementById("topic");
const messageInput = document.getElementById("message");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setFeedback(message, isError) {
    feedback.textContent = message;
    feedback.classList.toggle("is-error", isError);
    feedback.classList.toggle("is-success", !isError);
}

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    preview.hidden = true;

    if (!name || !email || !topicInput.value || !message) {
        setFeedback("Please complete every field before previewing your message.", true);
        contactForm.querySelector(":invalid")?.focus();
        return;
    }

    if (!emailPattern.test(email)) {
        setFeedback("Please enter a valid email address.", true);
        emailInput.focus();
        return;
    }

    document.getElementById("preview-name").textContent = name;
    document.getElementById("preview-email").textContent = email;
    document.getElementById("preview-topic").textContent =
        topicInput.options[topicInput.selectedIndex].text;
    document.getElementById("preview-message").textContent = message;

    setFeedback("Preview ready. Your message has not been sent.", false);
    preview.hidden = false;
});

contactForm.addEventListener("input", function () {
    feedback.textContent = "";
    feedback.classList.remove("is-error", "is-success");
    preview.hidden = true;
});
