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

// const myArray = [
//   {
//     name: "flight booking",
//     image:
//       "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
//     city: "New York",
//   },
//   { name: "Object 2", age: 25, city: "Los Angeles" },
//   { name: "Object 3", age: 30, city: "Chicago" },
//   { name: "Object 4", age: 35, city: "Houston" },
//   { name: "Object 5", age: 40, city: "Miami" },
//   { name: "Object 6", age: 45, city: "Seattle" },
// ];
// console.log(myArray);

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
    // Get the modal
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modal-image");
    modalImage.src = object.image;
    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `<h2>${object.name}</h2><p>${object.text}</p>`;

    // Get the button that opens the modal
    const btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    card.onclick = function () {
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
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
