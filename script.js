const lightbox = document.querySelector(".lightbox");

if (lightbox) {
  const lightboxImage = lightbox.querySelector(".lightbox-stage img");
  const lightboxCaption = lightbox.querySelector(".lightbox-footer p");
  const lightboxOriginal = lightbox.querySelector(".lightbox-footer a");
  const closeButton = lightbox.querySelector(".lightbox-close");

  function openFigure(button) {
    const source = button.dataset.full;
    const caption = button.dataset.caption || "";
    const thumbnail = button.querySelector("img");

    lightboxImage.src = source;
    lightboxImage.alt = thumbnail?.alt || "Full-resolution result figure";
    lightboxCaption.textContent = caption;
    lightboxOriginal.href = source;
    lightboxStage.classList.remove("is-zoomed");
    lightbox.showModal();
  }

  const lightboxStage = lightbox.querySelector(".lightbox-stage");

  document.querySelectorAll(".image-button").forEach((button) => {
    button.addEventListener("click", () => openFigure(button));
  });

  closeButton?.addEventListener("click", () => lightbox.close());

  lightboxImage.addEventListener("click", () => {
    lightboxStage.classList.toggle("is-zoomed");
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.close();
    }
  });

  lightbox.addEventListener("close", () => {
    lightboxImage.src = "";
    lightboxImage.alt = "";
    lightboxCaption.textContent = "";
    lightboxOriginal.removeAttribute("href");
    lightboxStage.classList.remove("is-zoomed");
  });
}
