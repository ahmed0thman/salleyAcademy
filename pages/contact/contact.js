import { animateOnView } from "/shared/utilities/helperFunctions.js";
import { animate } from "/assets/libs/motion/motion.min.js";

const contactHeader = document.getElementById("contactHeader");

if (contactHeader) {
  animateOnView(
    contactHeader,
    { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
    { duration: 0.75, ease: "easeInOut", delay: 0.25 },
    true,
    "0px 0px -50px 0px"
  );
}

const contactItems = Array.from(document.querySelector(".contact").children);

if (contactItems.length > 0) {
  contactItems.map((item, index) => {
    animateOnView(
      item,
      { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
      { duration: 0.75, ease: "easeInOut", delay: 0.55 * (index + 1) },
      true,
      "0px 0px -50px 0px"
    );
  });
}
