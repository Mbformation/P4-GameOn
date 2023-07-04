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
  constructor(data) {
    this.formSelector = data.formSelector;
    this.submitButtonSelector = data.submitButtonSelector;
    this.fields = data.fields;
    this.submitButton = new FormSubmitButton(this.submitButtonSelector);
    this.fieldValidator = new FieldValidator(this.fields);
  }
  checkForSubmission() {
    this.fieldValidator.validate();
    let formIsValid = false;
    if (formIsValid) {
      return this.submitButton.activate();
    } else {
      return this.submitButton.deactivate();
    }
  }
  submit() {}
}

class FormSubmitButton {
  constructor(submitButtonSelector) {
    this.buttonElement = document.querySelector(submitButtonSelector);
  }
  deactivate() {
    this.buttonElement.classList.add("disabled");
  }
  activate() {
    this.buttonElement.classList.remove("disabled");
  }
}

class FieldValidator {
  constructor(fields) {
    this.fields = fields;
  }
  validate() {
    for (const field of this.fields) {
      if (field.fieldType === "text-input") {
        this.validateTextInput(field);
      } else if (field.fieldType === "radio-button") {
        this.validateRadioBtn(field);
      } else {
        this.validateCheckbox(field);
      }
    }
  }
  validateTextInput(field) {
    const fieldElement = document.getElementById(field.fieldSelector);
    const regexPattern = new RegExp(field.fieldRegex);
    const errorMessageContainer = fieldElement.parentElement;
    fieldElement.addEventListener("input", () => {
      const fieldValue = fieldElement.value.trim();
      if (!regexPattern.test(fieldValue) && fieldElement.value !== "") {
        errorMessageContainer.setAttribute(
          "data-error",
          field.fieldErrorMessage
        );
        errorMessageContainer.setAttribute("data-error-visible", "true");
      } else if (field.fieldRequired && fieldValue === "") {
        errorMessageContainer.setAttribute("data-error", "Champ obligatoire");
        errorMessageContainer.setAttribute("data-error-visible", "true");
      } else {
        errorMessageContainer.removeAttribute("data-error");
        errorMessageContainer.removeAttribute("data-error-visible");
      }
    });
  }
  validateRadioBtn() {}
  validateCheckbox() {}
}

fetch("formData.json")
  .then((response) => response.json())
  .then((data) => {
    const signupForm = new Form(data);
    signupForm.checkForSubmission();
    signupForm.submit();
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });
