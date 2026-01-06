/* slider start */
let slideIndex = 1;
showSlides(slideIndex);

// Next / Previous
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Dots
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.querySelectorAll(".dots span");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  dots.forEach(dot => dot.classList.remove("active"));

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Auto slide
setInterval(() => {
  changeSlide(1);
}, 5000);

/* slider end */

/* travel with us */
let whyIndex = 0;

function slideWhy(direction) {
  const track = document.querySelector(".why-track");
  const cards = document.querySelectorAll(".why-card");
  const cardsPerView = window.innerWidth < 900 ? 1 : 3;
  const maxIndex = cards.length - cardsPerView;

  whyIndex += direction;

  if (whyIndex < 0) whyIndex = 0;
  if (whyIndex > maxIndex) whyIndex = maxIndex;

  const cardWidth = cards[0].offsetWidth;
  track.style.transform = `translateX(-${whyIndex * cardWidth}px)`;
}

/* travel with us end */

/* Guest slider start */
let guestIndex = 0;
const guestSlides = document.querySelectorAll(".guest-slide");

function showGuest(index) {
  guestSlides.forEach(slide => slide.classList.remove("active"));
  guestSlides[index].classList.add("active");
}

function changeGuest(direction) {
  guestIndex += direction;

  if (guestIndex < 0) guestIndex = guestSlides.length - 1;
  if (guestIndex >= guestSlides.length) guestIndex = 0;

  showGuest(guestIndex);
}

// Auto slide every 6 seconds
setInterval(() => {
  changeGuest(1);
}, 6000);

// Initial display
showGuest(guestIndex);

/* Guest slider end */

/* our partners */
const partnersTrack = document.querySelector(".partners-track");

partnersTrack.addEventListener("mouseover", () => {
  partnersTrack.style.animationPlayState = "paused";
});

partnersTrack.addEventListener("mouseout", () => {
  partnersTrack.style.animationPlayState = "running";
});

/* our partner end */