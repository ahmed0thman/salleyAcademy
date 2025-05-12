const btnModalTogglers = Array.from(
  document.querySelectorAll(".btn-modal-toggler")
);

if (btnModalTogglers.length > 0) {
  btnModalTogglers.map((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      const courseId = btn.dataset.courseId;
      const action = btn.dataset.action;
      console.log(targetId, courseId);
      const modalTarget = document.getElementById(targetId);
      if (action === "close") {
        modalTarget.className = "modal";
      } else {
        modalTarget.className = "modal show";
      }
    });
  });
}
