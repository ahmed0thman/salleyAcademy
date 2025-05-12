import { animateOnView } from "/shared/utilities/helperFunctions.js";
import { animate } from "/assets/libs/motion/motion.min.js";

const aboutTexts = Array.from(document.querySelectorAll(".about-item"));

if (aboutTexts.length > 0) {
  aboutTexts.map((item, index) => {
    animateOnView(
      item,
      { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
      { duration: 0.75, ease: "easeInOut", delay: 0.25 * (index + 1) },
      true,
      "0px 0px -50px 0px"
    );
  });
}
