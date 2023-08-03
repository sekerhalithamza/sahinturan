"use strict";

const gallery = document.getElementsByClassName("section-gallery__content")[0];
const leftBtn = document.getElementsByClassName("section-gallery-btn")[0];
const rightBtn = document.getElementsByClassName("section-gallery-btn")[1];

console.log(gallery);

const rect = gallery.getBoundingClientRect();
const galleryImages = gallery.getElementsByClassName("section-gallery__content-item");

let moveX = ((rect.width - window.innerWidth) / 2) * -1;
let scrollAmount = 0;
let index = (galleryImages.length - 1) / 2;

leftBtn.addEventListener("click", () => {
  if (index === 0) return;
  const elem = galleryImages[index];
  scrollAmount += elem.getBoundingClientRect().width;
  gallery.style.transform = `translateX( ${moveX + scrollAmount}px )`;
  index--;
});

rightBtn.addEventListener("click", () => {
  if (index === galleryImages.length - 1) return;
  scrollAmount -= galleryImages[index].getBoundingClientRect().width;
  gallery.style.transform = `translateX( ${moveX + scrollAmount}px )`;
  index++;
});
