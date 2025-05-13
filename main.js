import "/assets/libs/bootstrap/js/bootstrap.bundle.min.js";
import "/shared/utilities/modal.js";
import "/shared/layout/header/header.js";
import "/pages/home/newsLetter.js";

document.body.classList.add("no-transition");
window.addEventListener("load", () => {
  document.body.classList.remove("no-transition");
});
