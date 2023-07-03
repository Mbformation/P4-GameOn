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

class Form {
  constructor(formSelector, submitButtonSelector) {
    this.formSelector = formSelector;
    this.submitButtonSelector = submitButtonSelector;
    this.submitButton = new FormSubmitButton(submitButtonSelector);
  }
  validateFields() {}
  submitForm() {
    let formIsValid = false;
    if (formIsValid) {
      return this.submitButton.activateButton();
    } else {
      return this.submitButton.deactivateButton();
    }
  }
}

class FormSubmitButton {
  constructor(submitButtonSelector) {
    this.buttonElement = document.querySelector(submitButtonSelector);
  }
  deactivateButton() {
    this.buttonElement.classList.add("disabled");
  }
  activateButton() {
    this.buttonElement.classList.remove("disabled");
  }
}

class FormField {
  firstButton() {
    const firstField = document.getElementById("first");
    const regexPattern = /^[a-zA-Z]{2,}$/;

    firstField.addEventListener("input", () => {
      if (!regexPattern.test(firstField.value)) {
        document
          .querySelector(".formData")
          .setAttribute("data-error", "Deux caractères");
        document
          .querySelector(".formData")
          .setAttribute("data-error-visible", "true");
      } else {
        document.querySelector(".formData").removeAttribute("data-error");
        document
          .querySelector(".formData")
          .removeAttribute("data-error-visible");
      }
    });
  }
}

/*
Field = {fieldType, fieldSeletor, fieldRegex, fieldRequired
  
  FieldsValidator
  validateEachField(
    if (fieldtype = textField) {}
    if (fieldtype = checkbox) {}
    if (fieldtype = radio) {}
  )*/

const formField = new FormField().firstButton();

const inscriptionForm = new Form(".formData", ".btn-submit").submitForm();
