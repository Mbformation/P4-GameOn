import TextInputField from "./fields/textInputField.js";
import CheckboxField from "./fields/checkboxField.js";
import RadioField from "./fields/radioField.js";
import SubmitButton from "./submitButton/submitButton.js";

class Form {
  constructor(data) {
    this.submitButtonElement = data.submitButtonElement;
    this.fields = data.fields;
    this.submitButton = new SubmitButton(this.submitButtonElement);
    this.textInputField = new TextInputField();
    this.checkboxField = new CheckboxField();
    this.radioField = new RadioField();
  }
  matchFieldsAndValidation() {
    for (const field of this.fields) {
      if (field.type === "text-input") {
        this.textInputField.validate(field);
      } else if (field.type === "radio-button") {
        this.radioField.validate(field);
      } else {
        this.checkboxField.validate(field);
      }
    }
  }
  checkForSubmission() {
    let formIsValid = this.fields.every((field) => field.isValid);
    if (formIsValid) {
      return this.submitButton.activate();
    } else {
      return this.submitButton.deactivate();
    }
  }
  submit() {
    if (this.fields.every((field) => field.isValid)) {
      const payload = this.fields.map((field) => ({
        [field.selector]: field.element.value,
      }));
      console.log(payload);
    }
  }
}

export default Form;
