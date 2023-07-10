import ErrorMessage from "../errorMessage/errorMessage.js";

class RadioField {
  constructor(field) {
    this.field = field;
    this.errorMessage = new ErrorMessage(field);
  }
  validate(field) {
    const radioButtons = document.querySelectorAll(field.selector);
    radioButtons.forEach((radioButton) => {
      radioButton.addEventListener("change", () => {
        let isChecked = false;
        for (let i = 0; i < radioButtons.length; i++) {
          if (radioButtons[i].checked) {
            isChecked = true;
            break;
          }
        }
        if (!isChecked && field.required) {
          this.errorMessage.wrong(field);
        } else {
          this.errorMessage.hide(field);
        }
      });
    });
  }
}

export default RadioField;
