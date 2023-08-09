"use strict";

const gallery = document.getElementsByClassName("section-gallery__content")[0];
const leftBtn = document.getElementsByClassName("section-gallery-btn")[0];
const rightBtn = document.getElementsByClassName("section-gallery-btn")[1];
const projectBtns = document.getElementsByClassName("section-projects__option");
const projectBooks = document.getElementsByClassName("section-projects-book");
const projectDocumentaries = document.getElementsByClassName("section-projects-documentary");
const headerBtn = document.getElementById("headerBtn");
const headerNav = document.getElementById("headerNav");

addEventListener("DOMContentLoaded", function () {
  const rect = gallery.getBoundingClientRect();
  const galleryImages = gallery.getElementsByClassName("section-gallery__content-item");
  const galleryImagesArray = [...galleryImages];
  const galleryImageRects = galleryImagesArray.map((e) => {
    return e.getBoundingClientRect();
  });

  let moveX = ((rect.width - window.innerWidth) / 2) * -1;
  function calcScroll() {
    return (-76 * 10) / 2;
  }

  let scrollAmount = calcScroll();
  console.log(scrollAmount);
  let index = (galleryImages.length - 1) / 2;

  const stopAmount = 0;

  leftBtn.addEventListener("click", () => {
    if (index === stopAmount) return;
    const rect = galleryImageRects[index];
    scrollAmount += rect.width;
    gallery.style.transform = `translateX( ${moveX + scrollAmount}px )`;
    index--;
  });

  rightBtn.addEventListener("click", () => {
    if (index === galleryImages.length - (1 + stopAmount)) return;
    const rect = galleryImageRects[index];
    scrollAmount += rect.width;
    gallery.style.transform = `translateX( ${moveX + scrollAmount}px )`;
    index++;
  });
});

headerBtn.addEventListener("mousedown", () => {
  headerBtn.classList.toggle("active");
  headerNav.classList.toggle("active");
});

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
