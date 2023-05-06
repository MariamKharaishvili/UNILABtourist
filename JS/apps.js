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

const myArray = [
  {
    name: "flight booking",
    image: "./images/hotServices/flightBooking.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    name: "hotel & resort booking",
    image: "./images/hotServices/resortBooking.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    name: "family trip planner",
    image: "./images/hotServices/familyTrip.png",
    text: "CLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    name: "cruise tour",
    image: "./images/hotServices/cruiseTour.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    name: "fire camp",
    image: "./images/hotServices/fireCamp.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    name: "corporate holidays",
    image: "./images/hotServices/corporateHolidays.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
];

const myArrayElement = document.getElementById("myArray");

myArray.forEach((object) => {
  const card = document.createElement("div");
  card.classList.add("serviceCard");
  card.addEventListener("click", () => {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    modalImage.src = object.image;
    const modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = `<h2>${object.name}</h2><p>${object.text}</p>`;

    const btn = document.getElementById("myBtn");

    const span = document.getElementsByClassName("close")[0];

    card.onclick = function () {
      modal.style.display = "flex";
    };

    span.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });

  const image = document.createElement("img");
  image.src = object.image;

  image.classList.add("hotServicesImg");
  card.appendChild(image);

  const name = document.createElement("h2");
  name.innerText = object.name;
  name.classList.add("hotServiceTitle");
  card.appendChild(name);

  const text = document.createElement("p");
  text.innerText = object.text;
  text.classList.add("hotServiceCardText");
  card.appendChild(text);

  myArrayElement.appendChild(card);
});

const navbarBurger = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector(".navbar-menu");

navbarBurger.addEventListener("click", () => {
  navbarBurger.classList.toggle("activeNav");
  navbarMenu.classList.toggle("activeNav");
});
