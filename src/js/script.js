"use strict";

const gallery = document.getElementsByClassName("section-gallery__content")[0];
const leftBtn = document.getElementsByClassName("section-gallery-btn")[0];
const rightBtn = document.getElementsByClassName("section-gallery-btn")[1];
const projectBtns = document.getElementsByClassName("section-projects__option");
const projectBooks = document.getElementsByClassName("section-projects-book");
const projectDocumentaries = document.getElementsByClassName("section-projects-documentary");

setTimeout(function () {
  const rect = gallery.getBoundingClientRect();
  const galleryImages = gallery.getElementsByClassName("section-gallery__content-item");

  let moveX = ((rect.width - window.innerWidth) / 2) * -1;
  let scrollAmount = 0;
  let index = (galleryImages.length - 1) / 2;
  gallery.style.transform = `translateX( ${moveX + scrollAmount}px )`;

  const stopAmount = 1;

  leftBtn.addEventListener("click", () => {
    if (index === stopAmount) return;
    const elem = galleryImages[index];
    scrollAmount += elem.getBoundingClientRect().width;
    gallery.style.transform = `translateX( ${moveX + scrollAmount}px )`;
    index--;
  });

  rightBtn.addEventListener("click", () => {
    if (index === galleryImages.length - (1 + stopAmount)) return;
    scrollAmount -= galleryImages[index].getBoundingClientRect().width;
    gallery.style.transform = `translateX( ${moveX + scrollAmount}px )`;
    index++;
  });
}, 500);

projectBtns[0].addEventListener("click", () => {
  for (const element of projectBooks) {
    element.classList.remove("closed");
  }
  for (const element of projectDocumentaries) {
    element.classList.remove("closed");
  }
});

projectBtns[1].addEventListener("click", () => {
  for (const element of projectBooks) {
    element.classList.add("closed");
  }
  for (const element of projectDocumentaries) {
    element.classList.remove("closed");
  }
});

projectBtns[2].addEventListener("click", () => {
  for (const element of projectBooks) {
    element.classList.remove("closed");
  }
  for (const element of projectDocumentaries) {
    element.classList.add("closed");
  }
});
