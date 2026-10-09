"use strict";

const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("site-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

function updateThemeToggle() {
    const isDark = document.body.classList.contains("dark-theme");

    themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
    themeToggle.setAttribute("aria-pressed", String(isDark));
}

updateThemeToggle();

themeToggle.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-theme");

    localStorage.setItem("site-theme", isDark ? "dark" : "light");
    updateThemeToggle();
});
