import TextInputField from "./fields/textInputField.js";
import CheckboxField from "./fields/checkboxField.js";
import RadioField from "./fields/radioField.js";
import SubmitButton from "./submitButton/submitButton.js";

/* Form class definition */
class Form {
  constructor(data) {
    this.submitButtonElement = data.submitButtonElement; // Button element to pass in the SubmitButton instance
    /* adding the form property to each field in data */
    this.fields = data.fields.map((field) => {
      field.form = this; // form is an object representing the instance of form class
      return field;
    });
    this.submitButton = new SubmitButton(this.submitButtonElement); // creating an instance of Submit Button
  }

  /* Match field.type value with corresponding Field object */
  getFieldBuilder(field) {
    switch (field.type) {
      case "text-input":
        return TextInputField;
      case "radio-button":
        return RadioField;
      case "checkbox":
        return CheckboxField;

      default:
        return null;
    }
  }

  /* Activate the listener for each field */
  listenForValidation() {
    for (const field of this.fields) {
      const fieldType = this.getFieldBuilder(field);
      fieldType.listen(field);
    }
  }

  /* Validate form and activate button */
  validate() {
    let formIsValid = this.fields.every((field) => {
      const fieldType = this.getFieldBuilder(field);
      return fieldType.validate(field);
    });
    if (formIsValid) {
      return this.submitButton.activate();
    } else {
      return this.submitButton.deactivate();
    }
  }

  /* Edit form appearance */
  showSuccessMessage() {
    document.querySelector(
      "form"
    ).innerHTML = `<h1>Merci pour votre inscription</h1>`;
    document.querySelector(".modal-body").style.cssText = `
        display: flex;
        align-items:center;
        justify-content: center;
        height: 80vh;
        text-align: center;
        position: relative;
      `;
    const closeButton = document.createElement("button");
    closeButton.classList.add("new-button");
    closeButton.innerText = "Fermer";
    closeButton.style.cssText = `
        background: #fe142f;
        margin-top: 0.5em;
        padding-top: 0.7em;
        padding-bottom: 0.7em;
        padding-left: 4em;
        padding-right: 4em;
        color: #fff;
        border-radius: 10px;
        cursor: pointer;
        font-size: 16px;
        position: absolute;
        bottom: 10px;
        margin: auto;
        border: unset;
      `;
    document.querySelector(".modal-body").appendChild(closeButton);
    closeButton.addEventListener("click", closeModal);

    const closeIcon = document.querySelector(".close");
    closeIcon.addEventListener("click", (e) => {
      closeModal();
    });
    closeIcon.style.cssText = `
    z-index: 2;
    `;
  }

  /* Submit Form */
  submit() {
    /* Add listener on click to submit button */
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault(); // stops default html feature from refreshing the page
      const payload = {};
      this.fields.forEach((field) => {
        const name = field.element.parentElement.querySelector("label");
        payload[name.innerText] = field.element.value;
      });

      console.log("payload", payload);
      this.showSuccessMessage(); // call showSuccessMessage method
    });
  }
}

export default Form;
