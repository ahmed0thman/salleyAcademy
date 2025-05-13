document.querySelectorAll(".otp-input").forEach((input, index, inputs) => {
  input.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    e.target.classList.add("filled");
    if (e.target.value.length === 1 && index < inputs.length - 1) {
      const nextInput = inputs[index + 1];
      nextInput.focus();
    }
    if (e.target.value.length === 0) {
      e.target.classList.remove("filled");
    }
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      const prevInput = inputs[index - 1];
      prevInput.focus();
      e.target.classList.remove("filled");
      prevInput.classList.remove("filled");
    }
  });
});
