class SubmitButton {
  constructor(submitButtonElement) {
    this.buttonElement = submitButtonElement;
  }
  deactivate() {
    this.buttonElement.classList.add("disabled");
  }
  activate() {
    this.buttonElement.classList.remove("disabled");
  }
}

export default SubmitButton;
