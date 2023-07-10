import ErrorMessage from "../errorMessage/errorMessage.js";

class TextInputField {
  constructor(field) {
    this.field = field;
    this.errorMessage = new ErrorMessage(field);
  }
  validate(field) {
    const regexPattern = new RegExp(field.regex);
    field.element.addEventListener("input", () => {
      const fieldValue = field.element.value.trim();
      if (!regexPattern.test(fieldValue) && field.element.value !== "") {
        this.errorMessage.wrong(field);
      } else if (field.required && fieldValue === "") {
        this.errorMessage.empty(field);
      } else {
        this.errorMessage.hide(field);
      }
    });
  }
}

export default TextInputField;
