"use strict";

// 1. Validate the contact form and display a local preview.
const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");
const preview = document.getElementById("message-preview");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const feedbackMessage = document.getElementById('feedbackMessage');
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (contactName.value.trim() === '' || contactMessage.value.trim() === '') {
        feedbackMessage.textContent = "Error: Name and message cannot be blank.";
    } else if (!emailPattern.test(contactEmail.value)) {
        feedbackMessage.textContent = "Error: Please enter a valid email address.";
    } else {
        feedbackMessage.textContent = "Success: Data validated. Browser demonstration only — no message is sent.";
    }
});  
if (contactName.value === '' || contactMessage.value === '') {
    // Show error message
} else if (!emailPattern.test(contactEmail.value)) {
    // Show invalid email error
} else {
    // Show preview
}
    if (!name || !email || !message) {
        feedback.textContent = "Please complete all fields.";
        preview.hidden = true;
        return;
    }

    if (!emailPattern.test(email)) {
        feedback.textContent = "Please enter a valid email address.";
        preview.hidden = true;
        return;
    }

    // textContent safely displays the user's entered text.
    document.getElementById("preview-name").textContent = name;
    document.getElementById("preview-email").textContent = email;
    document.getElementById("preview-message").textContent = message;

    feedback.textContent =
        "Success: your form data was validated. No message was sent.";
    preview.hidden = false;
});

// 2. Gallery viewer: three photos with correct boundaries.
const photos = [
    {
        src: "images/photo1.jpg",
        caption: "My first photo",
        alt: "First personal photograph"
    },
    {
        src: "images/photo2.jpg",
        caption: "My second photo",
        alt: "Second personal photograph"
    },
    {
        src: "images/photo3.jpg",
        caption: "My third photo",
        alt: "Third personal photograph"
    }
];

let currentPhoto = 0;

function showPhoto() {
    const image = document.getElementById("gallery-image");

    image.src = photos[currentPhoto].src;
    image.alt = photos[currentPhoto].alt;

    document.getElementById("gallery-caption").textContent =
        photos[currentPhoto].caption;

    document.getElementById("gallery-count").textContent =
        `Photo ${currentPhoto + 1} of ${photos.length}`;

    document.getElementById("previous-photo").disabled =
        currentPhoto === 0;

    document.getElementById("next-photo").disabled =
        currentPhoto === photos.length - 1;
}

document.getElementById("previous-photo").addEventListener("click", function () {
    if (currentPhoto > 0) {
        currentPhoto--;
        showPhoto();
    }
});

document.getElementById("next-photo").addEventListener("click", function () {
    if (currentPhoto < photos.length - 1) {
        currentPhoto++;
        showPhoto();
    }
});

showPhoto();

// 3. Switch between light and dark themes.
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-theme");

    themeButton.textContent = isDark ? "Light mode" : "Dark mode";
    themeButton.setAttribute("aria-pressed", String(isDark));
});

// 4. Calculate planned weekly study hours.
const studyForm = document.getElementById("study-form");

studyForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const hoursInput = document.getElementById("hours").value.trim();
    const daysInput = document.getElementById("days").value.trim();
    const result = document.getElementById("study-result");

    const hours = Number(hoursInput);
    const days = Number(daysInput);

    if (
        hoursInput === "" ||
        daysInput === "" ||
        !Number.isFinite(hours) ||
        !Number.isFinite(days) ||
        hours < 0 ||
        days < 1 ||
        days > 7 ||
        !Number.isInteger(days)
    ) {
        result.textContent =
            "Enter valid hours (zero or more) and whole days from 1 to 7.";
        return;
    }

    const total = hours * days;
    result.textContent =
        `You plan to study ${total} hours per week.`;
});

// Bonus 1. Expand or collapse project details.
document.querySelectorAll(".details-toggle").forEach(function (button) {
    button.addEventListener("click", function () {
        const details = button.nextElementSibling;
        const isOpening = details.hidden;

        details.hidden = !isOpening;
        button.textContent = isOpening ? "Hide details" : "Show details";
        button.setAttribute("aria-expanded", String(isOpening));
    });
});

// Bonus 2. Mobile navigation open/close button.
const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "Close menu" : "Menu";
});

// Close the mobile menu after a visitor selects a section.
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "Menu";
    });
});