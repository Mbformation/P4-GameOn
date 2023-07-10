import ErrorMessage from "../errorMessage/errorMessage.js";

class CheckboxField {
  constructor(field) {
    this.field = field;
    this.errorMessage = new ErrorMessage(field);
  }
  validate(field) {
    field.element.addEventListener("change", () => {
      if (!field.element.checked && field.required) {
        this.errorMessage.wrong(field);
      } else {
        this.errorMessage.hide(field);
      }
    });
  }
}

export default CheckboxField;
