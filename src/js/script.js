"use strict";

const gallery = document.getElementsByClassName("section-gallery__content")[0];
const leftBtn = document.getElementsByClassName("section-gallery-btn")[0];
const rightBtn = document.getElementsByClassName("section-gallery-btn")[1];
const projectBtns = document.getElementsByClassName("section-projects__option");
const projectBooks = document.getElementsByClassName("section-projects-book");
const projectDocumentaries = document.getElementsByClassName("section-projects-documentary");
const headerBtn = document.getElementById("headerBtn");
const headerNav = document.getElementById("headerNav");

/*
addEventListener("DOMContentLoaded", function () {
  const rect = gallery.getBoundingClientRect();
  const galleryImages = gallery.getElementsByClassName("section-gallery__content-item");
  const galleryImgHeight = 100;

  let scrollAmount = calcScroll();
  let index = (galleryImages.length - 1) / 2;
  function calcScroll() {
    let val = 0;
    for (const img of galleryImages) {
      let ratio = img.getAttribute("data-aspect-ratio");
      val -= ratio * galleryImgHeight;
    }
    console.log(val)
    val /= 2;
    return val;
  }
  gallery.style.transform = `translateX( ${scrollAmount}px )`;
  leftBtn.addEventListener("click", () => {
    if (index === 0) return;
    const rect = galleryImages[index].getBoundingClientRect();
    scrollAmount += rect.width;
    gallery.style.transform = `translateX( ${scrollAmount}px )`;
    index--;
  });
  rightBtn.addEventListener("click", () => {
    if (index === galleryImages.length - 1) return;
    const rect = galleryImages[index].getBoundingClientRect();
    scrollAmount -= rect.width;
    gallery.style.transform = `translateX( ${scrollAmount}px )`;
    index++;
  });
});
*/
headerBtn.addEventListener("mousedown", () => {
  headerBtn.classList.toggle("active");
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
