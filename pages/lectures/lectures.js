import "/shared/utilities/modal.js";
import { modalPurchase } from "/pages/courses/coursePurchase.js";

const lockedVideo = document.querySelectorAll(".section-content-item.locked");

if (lockedVideo) {
  lockedVideo.forEach((video) => {
    video.addEventListener("click", (e) => {
      if (modalPurchase) {
        modalPurchase.classList.add("show");
      }
    });
  });
}
