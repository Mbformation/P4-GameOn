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
  constructor(jsonData) {
    this.formSelector = jsonData.formSelector;
    this.submitButtonSelector = jsonData.submitButtonSelector;
    this.fields = jsonData.fields;
    this.submitButton = new FormSubmitButton(this.submitButtonSelector);
    this.fieldValidator = new FieldValidator();
  }
  validateFields() {
    for (const field of this.fields) {
      if (field.fieldType === "text-input") {
        this.fieldValidator.validateTextInput(field);
      } else {
        this.fieldValidator.validateClickInput(field);
      }
    }
  }
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

class FieldValidator {
  validateTextInput() {}
  validateClickInput() {}
}

fetch("formData.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const signupForm = new Form(jsonData).submitForm();
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });

/*
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
const formField = new FormField().firstButton();
*/
