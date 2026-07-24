const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector(".lightbox-footer p");
const lightboxOriginal = lightbox.querySelector(".lightbox-footer a");
const closeButton = lightbox.querySelector(".lightbox-close");

function openFigure(button) {
  const source = button.dataset.full;
  const caption = button.dataset.caption || "";
  const thumbnail = button.querySelector("img");

  lightboxImage.src = source;
  lightboxImage.alt = thumbnail.alt;
  lightboxCaption.textContent = caption;
  lightboxOriginal.href = source;
  lightbox.showModal();
}

document.querySelectorAll(".image-button").forEach((button) => {
  button.addEventListener("click", () => openFigure(button));
});

closeButton.addEventListener("click", () => lightbox.close());

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

lightbox.addEventListener("close", () => {
  lightboxImage.src = "";
  lightboxImage.alt = "";
});
