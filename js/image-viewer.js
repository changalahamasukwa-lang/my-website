"use strict";

const imageViewer = document.getElementById("image-viewer");
const enlargedImage = document.getElementById("enlarged-image");
const viewerCaption = document.getElementById("image-viewer-caption");
const closeViewerButton = document.querySelector(".image-viewer-close");
let imageViewerOpener = null;

document.querySelectorAll(".gallery-image-button").forEach(function (imageButton) {
    imageButton.addEventListener("click", function () {
        const galleryImage = imageButton.querySelector("img");
        const figure = imageButton.closest("figure");
        const caption = figure.querySelector("figcaption");

        imageViewerOpener = imageButton;
        enlargedImage.src = galleryImage.currentSrc || galleryImage.src;
        enlargedImage.alt = galleryImage.alt;
        viewerCaption.textContent = caption.textContent.trim();
        imageViewer.showModal();
    });
});

closeViewerButton.addEventListener("click", function () {
    imageViewer.close();
});

imageViewer.addEventListener("click", function (event) {
    if (event.target === imageViewer) {
        imageViewer.close();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && imageViewer.open) {
        event.preventDefault();
        imageViewer.close();
    }
});

imageViewer.addEventListener("close", function () {
    imageViewerOpener?.focus();
});
