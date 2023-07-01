function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeModalBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

class FormTemplate {
  constructor(formSelector, submitButtonSelector) {
    this.formSelector = formSelector;
    this.submitButton = new FormSubmitButton();
    this.submitButtonSelector = submitButtonSelector;
  }
  addFormField() {}

  submitForm() {
    return this.submitButton.deactivateButton(this.submitButtonSelector);
  }
}

class FormSubmitButton {
  deactivateButton(buttonSelector) {
    const buttonElement = document.querySelector(buttonSelector);
    buttonElement.classList.add("disabled");
  }
}

class FormField {}

const inscriptionForm = new FormTemplate(
  ".formData",
  ".btn-submit"
).submitForm();
console.log(inscriptionForm);
