function toggleVideo(element) {
  const play = document.querySelector(".play");
  const close = document.querySelector(".close");
  const trailer = document.querySelector(".trailer");
  const video = document.querySelector("video");
  if (element == play) {
    trailer.classList.toggle("active");
    video.play();
  } else if (element == close) {
    video.pause();
    trailer.classList.toggle("active");
  }
}

// function closeTrailer() {
//   const trailer = document.querySelector(".trailer");
//   const video = document.querySelector("video");
//   video.pause();
//   trailer.classList.remove("active");
// }

function changeBg(bg, title) {
  const contents = document.querySelectorAll(".content");
  const backgrounds = document.querySelectorAll(".banner-bg");
  backgrounds.forEach((background) => {
    background.classList.remove("active");
  });

  document.querySelector(`.${bg}`).classList.add("active");

  contents.forEach((content) => {
    content.classList.remove("active");
    if (content.classList.contains(title)) {
      content.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.querySelector(".carousel");
  var instances = M.Carousel.init(carousel, {});
  carousel.children[instances.center].click();
});


const modals = document.querySelectorAll("[data-modal]");
const openBtns = document.querySelectorAll("[data-open]");
const closeBtns = document.querySelectorAll("[data-close]");

modals.forEach((modal) => {
  const color = modal.dataset.modal;

  const openBtn = Array.from(openBtns).find((ele) => {
    return ele.dataset.open == color;
  });

  const closeBtn = Array.from(closeBtns).find((ele) => {
    return ele.dataset.close == color;
  });

  openBtn.addEventListener("click", () => {
    modal.showModal();
  });

  closeBtn.addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close();
    }
  });
});
