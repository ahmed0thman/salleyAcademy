const modalPurchase = document.getElementById("modalPurchase");
const purchaseStepMethod = document.getElementById("purchaseStepMethod");
const purchaseStepCoupon = document.getElementById("purchaseStepCoupon");
const purchaseStepWallet = document.getElementById("purchaseStepWallet");
const formPurchaseMethod = document.getElementById("formPurchaseMethod");
const showPurchaseStepMethod = document.getElementById(
  "showPurchaseStepMethod"
);

if (modalPurchase) {
  modalPurchase.querySelectorAll(".exit-purchase").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.currentTarget === e.target) {
        modalPurchase.classList.remove("show");
        resetSteps();
      }
    });
  });
  modalPurchase.addEventListener("click", (e) => {
    if (e.target === modalPurchase) {
      modalPurchase.classList.remove("show");
      resetSteps();
    }
  });
}

function resetSteps() {
  purchaseStepCoupon.classList.add("d-none");
  purchaseStepWallet.classList.add("d-none");
  purchaseStepMethod.classList.remove("d-none");
  purchaseStepMethod.querySelectorAll("input").forEach((input) => {
    input.checked = false;
  });
}

if (formPurchaseMethod) {
  formPurchaseMethod.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!formPurchaseMethod.querySelector('input[name="method"]:checked')) {
      const errMsgMethod = formPurchaseMethod.querySelector(".error-message");
      if (errMsgMethod) {
        errMsgMethod.classList.remove("d-none");
        setTimeout(() => {
          errMsgMethod.classList.add("d-none");
        }, 3000);
      }
      return;
    }
    const formData = new FormData(formPurchaseMethod);
    const values = {};
    for (const [key, value] of formData.entries()) {
      values[key] = value;
    }
    if (values.method === "coupon") {
      purchaseStepMethod.classList.add("d-none");
      purchaseStepCoupon.classList.remove("d-none");
    }
    if (values.method === "wallet") {
      purchaseStepMethod.classList.add("d-none");
      purchaseStepWallet.classList.remove("d-none");
    }
    if (values.method === "paymob") {
      window.location.href = "/";
    }
  });
}

if (showPurchaseStepMethod) {
  showPurchaseStepMethod.addEventListener("click", (e) => {
    resetSteps();
  });
}
