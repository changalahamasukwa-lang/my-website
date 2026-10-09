"use strict";

document.querySelectorAll(".details-toggle").forEach(function (toggleButton) {
    const controlledDetails = document.getElementById(
        toggleButton.getAttribute("aria-controls")
    );

    if (!controlledDetails) {
        return;
    }

    toggleButton.addEventListener("click", function () {
        const isOpening = controlledDetails.hidden;

        controlledDetails.hidden = !isOpening;
        toggleButton.setAttribute("aria-expanded", String(isOpening));
        toggleButton.textContent = isOpening
            ? "Hide extra details"
            : "Show extra details";
    });
});
