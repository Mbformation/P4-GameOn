/* SibmitButton object definition */
class SubmitButton {
  constructor(submitButtonElement) {
    this.buttonElement = submitButtonElement;
  }
  /* Deactivate button */
  deactivate() {
    this.buttonElement.classList.add("disabled");
  }
  /* Activate button */
  activate() {
    this.buttonElement.classList.remove("disabled");
  }
}

export default SubmitButton;
