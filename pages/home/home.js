import {
  animateOnView,
  getCircleCoordinates,
} from "/shared/utilities/helperFunctions.js";
// import Swiper from "/assets/libs/swiper/swiper.min.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// Start Hero Animation
const heroElements = Array.from(document.getElementById("heroTag").children);

if (heroElements.length > 0) {
  heroElements.map((item, index) => {
    animateOnView(
      item,
      { opacity: [0, 1] },
      { duration: 1.25, ease: "easeOut", delay: (index + 1) * 0.25 },
      true
    );
  });
}
const heroVector = document.getElementById("heroVector");
if (heroVector) {
  animateOnView(
    heroVector,
    { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
    { duration: 0.75, ease: "easeInOut", delay: 0.5 },
    true
  );
}
const heroAvatar = document.getElementById("heroAvatar");
if (heroAvatar) {
  animateOnView(
    heroAvatar,
    { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
    { duration: 0.5, ease: "easeInOut", delay: 1 },
    true
  );
}

// end Hero Animation

// Start Sub Hero Animation

const subHeroElements = Array.from(
  document.getElementById("subHeroVector").children
);
if (subHeroElements.length > 0) {
  subHeroElements.map((item, index) => {
    animateOnView(
      item,
      { opacity: [0, 1] },
      { duration: 1.25, ease: "easeOut", delay: (index + 1) * 0.25 + 0.5 },
      true,
      "0px 0px -25% 0px"
    );
  });
}

const subHeroText = document.getElementById("subHeroText");

if (subHeroText) {
  animateOnView(
    subHeroText,
    { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
    { duration: 0.8, ease: "easeOut", delay: 0.1 },
    true,
    "0px 0px -100px 0px"
  );
}

const subHeroBadges = Array.from(
  document.getElementById("subHeroBadges").children
);
if (subHeroBadges.length > 0) {
  subHeroBadges.map((item, index) => {
    animateOnView(
      item,
      { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
      { duration: 0.8, ease: "easeOut", delay: (index + 1) * 0.2 },
      true,
      "0px 0px -50px 0px"
    );
  });
}

const floatingVectors = Array.from(
  document.getElementById("floatingVectors").children
);
if (floatingVectors.length > 0) {
  floatingVectors.map((item, index) => {
    const angle = +item.getAttribute("data-angle");
    const rad = Math.min(window.innerWidth * 0.35, 300);
    const { x, y } = getCircleCoordinates(rad, angle);
    animateOnView(
      item,
      {
        opacity: [0, 1],
        transform: [
          `translate(${x - rad / 2}px,${y - rad / 4}px)`,
          `translate(${x - rad / 2}px,${y - rad / 4}px)`,
        ],
      },
      { duration: 1, ease: "easeOut", delay: (index + 1) * 0.35 },
      true,
      "0px 0px -50px 0px"
    );
  });
}

// End Sub Hero Animation

// Start Main Categories Animation
const cardMainCategories = Array.from(
  document.getElementById("mainMategories").children
);

if (cardMainCategories.length > 0) {
  cardMainCategories.map((card, index) => {
    const direction = index % 2 === 0 ? 1 : -1;
    animateOnView(
      card,
      {
        opacity: [0, 1],
        transform: [`translateX(${100 * direction}px)`, "translateX(0)"],
      },
      {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.5,
      },
      true,
      "0px 0px -50px 0px"
    );
  });
}

// End Main Categories Animation

// start Courses Section
const coursesSwiper = new Swiper("#swiperCourses", {
  breakpoints: {
    1400: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    enabled: true,
  },
});

const selectedCoursesHeader = document.getElementById("selectedCoursesHeader");

if (selectedCoursesHeader) {
  animateOnView(
    selectedCoursesHeader,
    { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
    { duration: 0.75, ease: "easeInOut", delay: 0.25 },
    true,
    "0px 0px -50px 0px"
  );
}

// End Courses Section

// start Instructors Section
const swiperInstructors = new Swiper("#swiperInstructors", {
  breakpoints: {
    1400: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    enabled: true,
  },
});

const selectedCInstructorsHeader = document.getElementById(
  "selectedCInstructorsHeader"
);

if (selectedCInstructorsHeader) {
  animateOnView(
    selectedCInstructorsHeader,
    { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
    { duration: 0.75, ease: "easeInOut", delay: 0.25 },
    true,
    "0px 0px -50px 0px"
  );
}

// End Instructors Section

// start News Letter Section
const newsLetter = document.getElementById("newsLetter");

if (newsLetter) {
  animateOnView(
    newsLetter,
    { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
    { duration: 0.75, ease: "easeInOut", delay: 0.25 },
    true,
    "0px 0px -50px 0px"
  );
}

// End News Letter Section

//
