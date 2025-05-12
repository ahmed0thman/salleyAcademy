import { animateOnView } from "/shared/utilities/helperFunctions.js";
import { animate } from "/assets/libs/motion/motion.min.js";

const selectedCInstructorsHeader = document.getElementById("stageHeader");

if (selectedCInstructorsHeader) {
  animateOnView(
    selectedCInstructorsHeader,
    { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
    { duration: 0.75, ease: "easeInOut", delay: 0.25 },
    true,
    "0px 0px -50px 0px"
  );
}

const stagesOptions = Array.from(document.querySelectorAll(".stage-option"));

if (stagesOptions.length > 0) {
  stagesOptions.map((card, index) => {
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
        delay: 0.25,
      },
      true,
      "0px 0px -50px 0px"
    );
  });
}
