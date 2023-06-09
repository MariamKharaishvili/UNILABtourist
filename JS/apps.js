// slider images and button
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
// slider ends here

// video play button code
const video = document.getElementById("beachVideo");
function toggleVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
// video play button code

// hot services modal
const myArray = [
  {
    name: "flight booking",
    image: "Images/hotServices/flightBooking.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    name: "hotel & resort booking",
    image: "Images/hotServices/resortBooking.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    name: "family trip planner",
    image: "Images/hotServices/familyTrip.png",
    text: "CLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    name: "cruise tour",
    image: "Images/hotServices/cruiseTour.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    name: "fire camp",
    image: "Images/hotServices/fireCamp.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    name: "corporate holidays",
    image: "Images/hotServices/corporateHolidays.png",
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

// hot services modal and cards ends here

// this code makes numbers count from zero
function animateValue(id, start, end, duration) {
  var obj = document.getElementById(id);
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var timer = setInterval(function () {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

var happyTravelers = document.getElementById("happy-travelers");
var satisfiedTours = document.getElementById("satisfied-tours");
var destination = document.getElementById("destination");
var hotelsResorts = document.getElementById("hotels-resorts");
animateValue("happy-travelers", 0, 120, 2000);
animateValue("satisfied-tours", 0, 2594, 2000);
animateValue("destination", 0, 854, 2000);
animateValue("hotels-resorts", 0, 978, 2000);

//
var burgerMenu = document.getElementById("burgerMenu");

var overlay = document.getElementById("menu");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
///
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  const scrollToTop = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, scrollTop - scrollTop / 8);
    }
  };
  scrollToTop();
});
