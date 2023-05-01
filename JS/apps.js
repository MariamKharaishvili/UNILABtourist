const slidesContainer = document.getElementById("slidesContainer");
const slide = document.querySelector(".slide");
const prevBtn = document.getElementById("slideArrowPrev");
const nextBtn = document.getElementById("slideArrowNext");

prevBtn.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

nextBtn.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

const video = document.getElementById("beachVideo");
function toggleVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
