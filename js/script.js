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

function closeTrailer() {
  const trailer = document.querySelector(".trailer");
  const video = document.querySelector("video");
  video.pause();
  trailer.classList.remove("active");
}

function changeBg(bg, title, color) {
  const banner = document.querySelector(".banner");
  const contents = document.querySelectorAll(".content");
  const backgrounds = document.querySelectorAll(".banner-bg");
  backgrounds.forEach((background) => {
    background.classList.remove("opacity-1");
  });

  document.documentElement.style.setProperty("--bg", color[0]);
  document.documentElement.style.setProperty("--fg", color[1]);
  document.documentElement.style.setProperty("--hover", color[2]);

  document.querySelector(`.${bg}`).classList.add("opacity-1");

  contents.forEach((content) => {
    content.classList.remove("active");
    if (content.classList.contains(title)) {
      content.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var carousel = document.querySelector(".carousel");
  var instances = M.Carousel.init(carousel, {
    indicators: true,
  });
  carousel.children[instances.center].click();
});

function openManual(game) {
  const manuals = document.querySelectorAll(".manual");

  manuals.forEach((manual) => {
    if (manual.classList.contains(game)) {
      manual.classList.add("active");
    }
  });
}

function closeManual() {
  const manuals = document.querySelectorAll(".manual");

  manuals.forEach((x) => {
    x.classList.remove("active");
  });
}
