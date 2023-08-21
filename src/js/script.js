"use strict";

const gallery = document.getElementById("mediaGallery");
const galleryBtns = document.getElementsByClassName("section-media--chevron");

var galleryPosition = 0;

// Min vw: translatex(300vw)
// Max vw: translateX(300vw)
for (let btn of galleryBtns) {
  btn.addEventListener("click", function () {
    let direction = btn.getAttribute("data-direction");
    if (direction === "right")
      if (galleryPosition <= -340) {
        galleryPosition = 0;
      } else galleryPosition -= 20;
    else if (galleryPosition >= 0) {
      galleryPosition = -340;
    } else galleryPosition += 20;
    gallery.style.transform = `translateY(-50%) translateX(${galleryPosition}vw)`;
  });
}
