import { animateOnView } from "/shared/utilities/helperFunctions.js";
import { animate } from "/assets/libs/motion/motion.min.js";
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
